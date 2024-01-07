namespace QAApp.Models
{ 
public class QuestionModel
    {
        public class Area
        {
            public string Name { get; set; }
            public List<Section> Sections { get; set; } = new List<Section>();
        }

        public class Section
        {
            public string Name { get; set; }
            public List<Subsection> Subsections { get; set; } = new List<Subsection>();
        }

        public class Subsection
        {
            public string Name { get; set; }
            public List<Question> Questions { get; set; } = new List<Question>();
        }

        public class Question
        {
            public int Id { get; set; }
            public string Text { get; set; }
            public int QuestionNumber { get; set; }
        }

    }
}
