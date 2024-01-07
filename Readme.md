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
git clone https://github.com/dhivyasoundar/Questionnaire.git
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

```
