# Resemble AI

## Table of Contents

1. [Installation](#installation)
   - [macOS](#macos)
   - [Windows](#windows)
2. [Setup](#setup)
3. [Assumptions/Limitations](#assumptionslimitations)
4. [Improvements if Had More Time](#improvements-if-had-more-time)

---

## Installation

### macOS

1. **Ensure you have Homebrew installed**:
   - If not, you can install it with the following command:
     ```bash
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```
2. **Install Node.js**:
   - You can install Node.js using Homebrew:
     ```bash
     brew install node
     ```
3. **Verify Node.js Installation**:
   - Ensure Node.js and npm are installed correctly:
     ```bash
     node -v
     npm -v
     ```

### Windows

1. **Ensure you have Chocolatey installed**:
   - If not, you can install it by following the instructions on the [Chocolatey website](https://chocolatey.org/install).
2. **Install Node.js**:
   - You can install Node.js using Chocolatey:
     ```bash
     choco install nodejs
     ```
3. **Verify Node.js Installation**:
   - Ensure Node.js and npm are installed correctly:
     ```bash
     node -v
     npm -v
     ```

---

## Setup

1. **Download and Unzip the Project**:

   - Download the project zip file and unzip it to your desired location.
   - Navigate to the unzipped project directory:
     ```bash
     cd your-unzipped-project-directory
     ```

2. **Install Dependencies**:

   - Once inside the project directory, run the following command to install the necessary dependencies:
     ```bash
     npm install
     ```
   - This command will install all the required packages specified in the `package.json` file.

3. **Running the Application**:
   - To start the development server, run:
     ```bash
     npm start
     ```
   - The application should now be running at `http://localhost:3000`.

## Assumptions/Limitations

- **Assumptions**:

  - The grid to list out voices (I assumed that should be in the voices page - Not using the same logic do search the dropdown in the home page)

- **Limitations/Tradeoffs I made**:
  - Need Proper error handling in place. (I have identified some edge cases and mentioned them. Chosen the current method for speed.)
  - TypeScript is not Utilized for type safety. (I'm more comfortable with Plain js and utilized this method for speed)
  - Need better folder structure/component structure.

---

## Improvements if Had More Time

- Improving the code quality. Better organization of the components/Folder.
- Testing the application/Error handling
- Creating a datastructure to store the objects for voices.
- Utilizing TypeScript for the type Safety
- Implementing robust state management and decoupling the logic from Home.jsx

---
