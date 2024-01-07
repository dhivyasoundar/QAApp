# Questionnaire Web App

This web application allows users to answer a series of questions organized by areas, sections, and subsections. The application dynamically loads questions based on user selections and provides a user-friendly interface for navigation.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Styling](#styling)
- [Button Logic](#button-logic)
- [Answer Box](#answer-box)
- [Model Integration](#model-integration)

## Features

- Dynamic loading of questions based on selected areas, sections, and subsections.
- Cascaded dropdowns.
- Navigation buttons for moving between questions.
- Stylish and user-friendly design.
- Answer box to input user responses.
- Integration with a server-side model for handling QAs and fetching datset(csv).

## Prerequisites

- [ASP.NET](https://dotnet.microsoft.com/apps/aspnet)
- [jQuery](https://jquery.com/)
- Visual Studio
- .NET Core

## Installation

1. Clone the repository:

```bash
git clone https://github.com/dhivyasoundar/QAApp.git
```

2. Open the project in your preferred development environment. (Recommended VisualStudio 2019/2022 for .NET Core 8 support)

3. Run the application.

## Usage

1. Open the application in a web browser.

2. Select an area from the dropdown.

3. Choose a section, and then select a subsection.

4. Answer the displayed questions using the navigation buttons.

## Styling

The application features a clean and modern design inspired by Google's Material Design. The styling is implemented using CSS for a responsive and visually appealing user interface.

## Button Logic

The navigation buttons (Previous, Next, Reload) are implemented to provide a seamless user experience. They dynamically appear based on the user's progress through the questionnaire.

## Answer Box

A text area is provided for users to input their answers. The answer box has a fixed height and is scrollable to accommodate longer responses.

## Model Integration

The application integrates with a server-side model for handling answers. User responses are stored in memory and sent to the model via the controller. The model is designed in `QuestionModel`.

Here is the screenshots of the Questionnaire Web App:

UI of the Questionnaire Web App:

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/07cc90e5-7749-45e2-ad37-31cee8b4e3ed)

Click next button to move to next question: (it will also save the answer)

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/9b7dafa7-f31b-4f1b-874f-71b1321cb189)

Click previous button to move to previous questions: (it will also save the answer)

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/8c2bfa51-0d71-4508-a0f1-f646dbe67358)

After completing all the questions in particular subsection, it will automatically move to the next subsection:

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/b615d460-9570-4f46-923c-312f81b3504b)

After completing all the subsection, it will automatically move to the next section:

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/4fb1a2f1-3ef3-4aa0-b917-307d8eeb92ea)

After completing all the section, it will automatically move to the next area:

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/d564a1d6-1c79-4f8e-91ab-fb2325a84aee)

After answering all the questions, it shows all questions finished:

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/b3eafdec-e0c0-472a-ab81-36dd840b7954)

Atlast it will show reload button: (reload button helps to reload the page and start from first)

![image](https://github.com/dhivyasoundar/QAApp/assets/39046735/20f91c80-5e4c-491b-9d07-cc1dcf0c3980)






