# WeCare Project

## Group Details
- **Group Number**: 4
- **Project Name**: WeCare
- **Members**:
  - Beril Ozhan
  - Ananya Mishra
  - Qinruo Yang
  - Marala Berdyeva
  - Remi Kahn

## Overview
Our project, WeCare, is devoted to the United Nations Sustainable Development Goal (SDG) 2: Zero Hunger. The mission of this SDG is to eradicate hunger globally by the year 2030. Through WeCare, we are striving to answer the pivotal question, "How might we educate young professionals on global food insecurity to help direct their donations to communities in need?"

Our hypothesis is that many young individuals are uninformed about the depth of the worldwide hunger issue. Thus, by shedding light on this crisis, we can empower them to make informed decisions regarding their charitable donations.

## Background

Hunger, a global challenge, is not just about food scarcity. Its root causes include factors like lack of awareness, poverty, conflicts, and political instability. Recent data from the UN highlights the gravity of this issue:

- "By 2022, about 735 million people, which equates to 9.2% of the world’s population, were chronically hungry. This marked a significant rise from 2019."
- "In 2022, 2.4 billion people faced moderate to severe food insecurity, which means they didn't have regular access to safe and nutritious food. This number surged by a staggering 391 million people compared to 2019 figures."

In the words of Daniel C., "Why is the public not more involved in a debate on the problem of world hunger? The problem of world hunger is inconceivable to those who live in comfortable surroundings, detached from the realities of the Third World."

The aim of our project is to bridge this gap of awareness, believing that enlightenment and awareness-building are vital tools in the battle against the global hunger crisis.

## Features
- Quiz
- Resources cards
- Charity catalog
- Favorite charities
- Log in/Sign Up/Log out
- Customize profile

## Testing Protocol


|   | Feature 1: Quiz | Feature 2: Resources Cards | Feature 3: Charity Catalog | Feature 4: Log In/Log Out | Feature 5: Customize Profile |
| ------------- | ------------- | ------------ | ------------- | ------------ | ------------ |
| Requirement Specifications  | The quiz provides five question to match individuals with specific charities based on their preferences. The question will display immediately when user presses start quiz and after the user answers a question, the next question will come in sequential order. The progress bar will show the user progress in both a bar form and numerical form depending on which question they are on. The user may also go back to change their answer. Once the user completes all five questions they will be matched with five charities. | On the Resources page, we will have fours cards where users can click to learn more about various topics or other resoruces. | On the Resources page, we will include a charity catalog where users can look through multiple charities in a table format. Users can also save these charities to their profile. | The user may log in using an appropriate email and password. If a user does not have an account they may sign up using an email and password. Once a user is signed in they can go to the profile tab and customize their information. A user may log out by navigating to the profile tab and clicking log out. | Once a user is logged in or has signed up, they can edit their profile. Options to edit include a profile photo, name, city, and pronouns. | 
| Testing Cases  | <ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li></ul>  | <ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li></ul> | <ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li></ul>  | <ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li></ul> | <ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li></ul> |
| Expected Results  | <ul><li>The quiz starts when the start button is pressed.</li><li>All questions and answer choices are displayed clearly without any formatting issues or typos.</li><li>For each question answered, the progress bar should advance proportionally.</li> If user presses the back button on a question they should be taken back to the previous question. </li><li>On the last question, the progress bar should be fully filled.</li><li>After answering all questions and submitting, the user should be taken to the results page where the charities are filtered correctly based on the user's answers to the questions.</li></ul> |Content Cell | Content Cell | Content Cell  | Content Cell | Content Cell |
| Unexpected Results  | <ul><li>User takes the quiz multiple times with different answers, but every time, they get the same suggested charities, irrespective of their choices.</li><li> User begins the quiz, but some questions appear cut off. The progress bar doesn't move after answering questions, and at the end, the user is not taken to a results page. </li><li>User clicks back button, but the user’s previous selection is not visible or has been reset.</li></ul>  | Content Cell | Content Cell  | Content Cell | Content Cell |

**Known Bugs**
<ul><li>Users are unable to unsave charities while on Resources Page. A workaround for this is to provide users a way to unsave through their profile page. Users will see a list of saved charities and can choose to unsave from there.</li></ul>

## User Personas

You can find the 3 user personas we have made [here](deliverables/user-personas).

## Installation & Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following commands:
   ```
   npm install
   npm start
   ```

**Live Website**: [WeCare](https://wecare-26feb.web.app/)

## References
- Daniel C. (2002). "MAKE PUBLIC AWARE OF WORLD HUNGER". South Florida Sun - Sentinel. [Link](https://www.proquest.com/newspapers/make-public-aware-world-hunger/docview/387991123/se-2)
- UN. "Goal 2: Zero Hunger - United Nations Sustainable Development". [Link](https://www.un.org/sustainabledevelopment/hunger/)
