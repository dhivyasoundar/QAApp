using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using static QAApp.Models.QuestionModel;

public class HomeController : Controller
{
    private static List<Area> _areas;
    private static string _fileName = AppDomain.CurrentDomain.BaseDirectory + "DummyData.csv";
    static HomeController()
    {
        _areas = new List<Area>();
        var csvData = System.IO.File.ReadAllLines(_fileName);
        SeedData(csvData);
    }

    private static void SeedData(string[] csvData)
    {
        foreach (var line in csvData.Skip(1)) // Skip header
        {
            var values = line.Split(',');

            var areaName = values[1];
            var sectionName = values[2];
            var subsectionName = values[3];

            var area = _areas.FirstOrDefault(a => a.Name == areaName);
            if (area == null)
            {
                area = new Area { Name = areaName };
                _areas.Add(area);
            }

            var section = area.Sections.FirstOrDefault(s => s.Name == sectionName);
            if (section == null)
            {
                section = new Section { Name = sectionName };
                area.Sections.Add(section);
            }

            var subsection = section.Subsections.FirstOrDefault(sub => sub.Name == subsectionName);
            if (subsection == null)
            {
                subsection = new Subsection { Name = subsectionName };
                section.Subsections.Add(subsection);
            }

            var question = new Question
            {
                Id = int.Parse(values[0]),
                Text = values[4],
                QuestionNumber = int.Parse(values[5])
            };

            subsection.Questions.Add(question);
        }
    }

    public IActionResult Index()
    {
        ViewBag.Areas = _areas;
        ViewBag.Sections = new List<Section>();
        ViewBag.Subsections = new List<Subsection>();
        ViewBag.Questions = new List<Question>();
        var questions = ViewBag.Questions;
        ViewBag.QuestionsArray = ViewBag.QuestionsArray = JsonConvert.SerializeObject(ViewBag.Questions);




        return View(_areas);
    }

    [HttpPost]
    public JsonResult GetSections(string areaName)
    {
        var area = _areas.FirstOrDefault(a => a.Name == areaName);

        if (area != null)
        {
            var sections = area.Sections;
            return Json(sections);
        }

        return Json(null);
    }

    [HttpPost]
    public JsonResult GetSubsections(string areaName, string sectionName)
    {
        var area = _areas.FirstOrDefault(a => a.Name == areaName);
        var section = area?.Sections.FirstOrDefault(s => s.Name == sectionName);

        if (section != null)
        {
            var subsections = section.Subsections;
            return Json(subsections);
        }

        return Json(null);
    }

    [HttpPost]
    public JsonResult GetQuestions(string areaName, string sectionName, string subsectionName)
    {
        var area = _areas.FirstOrDefault(a => a.Name == areaName);
        var section = area?.Sections.FirstOrDefault(s => s.Name == sectionName);
        var subsection = section?.Subsections.FirstOrDefault(sub => sub.Name == subsectionName);

        if (subsection != null)
        {
            var questions = subsection.Questions;
            ViewBag.QuestionsArray = questions;
            return Json(questions);
        }

        return Json(null);
    }
}
