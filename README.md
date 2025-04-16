## Docs
## Overview

This project is a personal portfolio website for Rick van der Eijk, showcasing his skills, projects, and providing a way to download his CV. The website is built using Angular and follows best practices for modularization, styling, and component-based architecture.

## Project Structure

src/ app/ core/ components/ header/ header.component.ts header.component.html header.component.scss services/ technologies.service.ts shared/ components/ small-button/ small-button.component.ts small-button.component.html small-button.component.scss features/ about/ about.component.ts about.component.html about.component.scss technologies/ technologies.component.ts technologies.component.html technologies.component.scss portfolio/ portfolio.component.ts portfolio.component.html portfolio.component.scss app-routing.module.ts app.component.ts app.component.html app.component.scss app.module.ts assets/ images/ photoMe.jpg files/ RickvanderEijkCV2024.pdf styles.scss index.html

## Key Components

### Header Component
**File**: `src/app/core/components/header/header.component.ts`
**Description**: Displays the header section with Rick's name and title, along with a scroll button.

### About Component
**File**: `src/app/features/about/about.component.ts`
**Description**: Provides information about Rick, including a photo and a link to download his CV.

### Technologies Component
**File**: `src/app/features/technologies/technologies.component.ts`
**Description**: Lists the core technologies Rick is proficient in, along with other technologies he is familiar with.

### Portfolio Component
**File**: `src/app/features/portfolio/portfolio.component.ts`
**Description**: Showcases Rick's projects with links to view and access the code.

## Services

### Technologies Service
**File**: `src/app/core/services/technologies.service.ts`
**Description**: Provides data about the core and other technologies Rick is proficient in.

### Portfolio Service
**File**: `src/app/core/services/portfolio.service.ts`
**Description**: Provides data and functionality related to Rick's portfolio projects.

### Whitepaper Service
**File**: `src/app/core/services/whitepaper.service.ts`
**Description**: Manages the form and functionality for downloading Rick's whitepaper.

## Styling
**File**: `src/styles.scss`
**Description**: Contains global styles and CSS variables for consistent theming across the application.

## Usage

### Running the Project
npm install

### Running the Development Server
ng serve
Open the Application: Open your browser and navigate to http://localhost:4200.

### Building the Project
To build the project for production, run: ng build --prod


## Best Practices

### Modularization
The project is organized into core, shared, and feature modules for better maintainability and scalability.

### Styling
Uses SCSS for styling with CSS variables for consistent theming.
Responsive Design: Ensures the application is responsive and works well on different screen sizes.
Accessibility: Follows best practices for accessibility, including ARIA attributes and keyboard navigation.

### Future Improvements
Unit Tests: Add unit tests for components and services using Jasmine and Karma.
End-to-End Tests: Add end-to-end tests using Protractor or Cypress.
Performance Optimization: Implement lazy loading for feature modules and optimize images.

## Conclusion
This project serves as a personal portfolio for Rick van der Eijk, showcasing his skills and projects. It follows best practices for Angular development, ensuring a maintainable and scalable codebase.

