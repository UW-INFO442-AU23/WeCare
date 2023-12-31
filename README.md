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
Our project, WeCare, is devoted to the United Nations Sustainable Development Goal (SDG) 2: Zero Hunger. The mission of this SDG is to eradicate hunger globally by the year 2030. Through WeCare, we are striving to answer the pivotal question, "How might we educate young professionals in Washington on food insecurity to help direct their donations to resources working to eliminate hunger for local and global communities?"

Our hypothesis is that many young individuals are uninformed about the depth of the worldwide hunger issue. Thus, by shedding light on this crisis, we can empower them to make informed decisions regarding their charitable donations.

## Background

**Hunger, a global challenge,** is not just about food scarcity. Its root causes include factors like lack of awareness, poverty, conflicts, and political instability. Recent data from the UN highlights the gravity of this issue:

- "By 2022, about 735 million people, which equates to 9.2% of the world’s population, were chronically hungry. This marked a significant rise from 2019."
- "In 2022, 2.4 billion people faced moderate to severe food insecurity, which means they didn't have regular access to safe and nutritious food. This number surged by a staggering 391 million people compared to 2019 figures."

In the words of Daniel C., "Why is the public not more involved in a debate on the problem of world hunger? The problem of world hunger is inconceivable to those who live in comfortable surroundings, detached from the realities of the Third World."

**In Washington:**
- 1 in 11 people and 1 in 8 children face hunger
- Leading causes include pandemic economic upheaval, inflation, and rollback of gov’t assistance.

**Why don't people give?**
- “I don’t have the money”
- “I’d rather volunteer”
- “I’d rather donate food or goods”
- “I don’t trust organizations to spend their money well"

The aim of our project is to bridge this gap of awareness, believing that enlightenment and awareness-building are vital tools in the battle against local and global hunger crises. Rather than just directing users to donate money, we want to direct users to various resources to help the cause!


## Features
- Quiz
- Resources cards
- Charity catalog
- Save charities
- Log in & Sign up
- Customize profile

## Libraries & Framework

- MUI
- Bootstrap

## Installation & Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the following commands:
   ```
   npm install
   npm start
   ```

**Live Website**: [WeCare](https://wecare-26feb.web.app/)

## Testing Protocol


|   | Feature 1: Quiz | Feature 2: Resources Cards | Feature 3: Charity Catalog & Save Charity | Feature 4: Log In & Sign up | Feature 5: Customize Profile |
| ------------- | ------------- | ------------ | ------------- | ------------ | ------------ |
| Requirement Specifications  | The quiz provides five questions to match individuals with specific charities based on their preferences. The question will display immediately when the user presses start quiz and after the user answers a question, the next question will come in sequential order. The progress bar will show the user progress in both a bar form and numerical form depending on which question they are on. The user may also go back to change their answer or go back to the initial quiz page. Once the user completes all five questions they will be matched with five charities. Users may unsave/save these charities to their profile (must be logged in) and can click learn more to navigate to the charity website. A user may also press the restart the quiz button once they reach the end which will navigate them back to the start quiz page. | On the Resources page, we will have four cards where users can click to learn more about various topics or other resources. | On the Resources page, we will include a charity catalog where users can look through multiple charities in a table format. Users can also save/unsave these charities to their profile. If a user wants to learn more about a specific charity they can click on the charity name to navigate to its website. | The user may log in using an appropriate email and password. If a user does not have an account they may sign up using an email and password. Once a user is signed in they can go to the profile tab and customize their information. A user may log out by navigating to the profile tab and clicking log out. | Once a user is logged in or has signed up, they can edit their profile. Options to edit include a profile photo, name, city, and pronouns. |
| Testing Cases  |<ul><li>User clicks start quiz button.</li><li>User answers a couple questions then presses back button.</li><li>User takes quiz multiple times, answering with different options.</li><li>User saves and unsaves charity quiz results when logged in. </li><li>User is not logged in and attempts to save a charity.</li><li>User clicks learn more on the quiz result cards to navigate to the charity website.</li><li>User presses restart quiz button on the quiz results page and goes through the quiz again. </li> </ul>  | <ul><li>User clicks on learn more button.</li><li>User presses x to close learn more pop up.</li></ul> | <ul><li>User saves a charity.</li><li>User unsaves a charity.</li><li>User is not logged in and attempts to save charity. They are then prompted to log in.</li></ul>  |<ul><li>User logs in.</li><li>User logs in with wrong credentials.</li><li>User signs up.</li><li>User logs out.</li><li>User inputs incorrect email format. </li></ul> | <ul><li>User edits profile information and saves changes.</li><li>User adds jpg or png file for profile image.</li></ul> |
| Expected Results  | <ul><li>The quiz starts when the start button is pressed.</li><li>All questions and answer choices are displayed clearly without any formatting issues or typos.</li><li>For each question answered, the progress bar should advance proportionally.</li> If user presses the back button on a question they should be taken back to the previous question. </li><li>On the last question, the progress bar should be fully filled.</li><li>After answering all questions and submitting, the user should be taken to the results page where the charities are filtered correctly based on the user's answers to the questions.</li><li>Users are able to successfully save or unsave their matched charities when logged in. </li><li>When users save charity this also reflects that they saved the charity in the catalog, and they will see this charity in their profile.</li><li>When user presses learn more on the quiz result cards they are navigating to the charity website successfully.</li><li>If user decides to restart the quiz, the button will successfully navigate the user back to the initial quiz page.</li></ul> |<ul><li>When pressed, the learn more button shows a pop up with more information.</li><li>All learn more pop ups successfully render.</li><li>Users can successfully exit out of each pop up.</li><ul> | <ul><li>User is navigated to charity website when charity name is pressed.</li><li>User can save/unsave charity through the resources page.</li><li>User can unsave a charity from their profile.</li><li>User sees all saved charities in their profile page.</li><li>User is prompted to log in, if previously not, when attempting to save charity.</li></ul> | <ul><li>User is successfully logged in if correct credentials are entered. If not, there will be an error.</li><li>User should receive an error message stating that the email format is incorrect and should not be able to log in.</li><li>If user successfully logs in they will be prompted to their profile page to began customizing their profile.</li></ul> | <ul><li>User edits profile and changes are not saved </li><li>User enters invalid profile information and are prompted with an error.</li><li>User adds a photo (either jpg or png) to their profile and saves successfully.</li></ul> |
| Unexpected Results  | <ul><li>User takes the quiz multiple times with different answers, but every time, they get the same suggested charities, irrespective of their choices.</li><li> User begins the quiz, but some questions appear cut off. The progress bar doesn't move after answering questions, and at the end, the user is not taken to a results page. </li><li>User clicks back button, but the user’s previous selection is not visible or has been reset.</li><li>User saves charity, but does not save to their profile.</li><li>User saves charity, but does not reflect that charity is saved on catalog.</li><li>User can save charity successfully if not logged in.</li><li>When user presses learn more on the charity result cards they are not navigated to the charity website successfully or the link does not render.</li><li>When a user decides to restart the quiz, the button does not successfully navigate the user back to the initial quiz page or does not render.</li></ul>  | <ul><li>The learn more button for all cards does not prompt a pop up box with additional information</li><li>The pop up box does not close when the user tries to exit</li><li>The pop up box pops up in a random area of the screen</li><li>The pop up box does not render any information</li></ul> | <ul><li>The links for the charity websites do not work or the link opens on the same tab, not a different tab.</li><li>The charity save/unsave function does not work on the resources page.</li><li>User is able to save a charity even if they are not logged in.</li></ul>  | <ul><li>User logs in successfully despite inputting incorrect credentials.</li><li>User successfully signs up with incorrect email/password format.</li><li>When user logs in/signs up they are prompted to a different page rather than the profile page.</li></ul> | <ul><li>User enters invalid information into profile and the changes are still saved.</li><li>User saves changes, but changes do not save to profile</li><li>User adds jpg or png file for profile image but photo does not upload or reads as invalid file type OR user adds a different file type and the photo uploads successfully.</li></ul> |

**Automated Jest Tests for Quiz Results**

we have implemented automated Jest tests to ensure the rendered quiz results align with user inputs.
Execute these tests by running the following command:
   ```bash
   npm test
   ```
This command initiates Jest in watch mode. Once Jest starts, you can press:
   ```
   a
   ```
to run all tests.

**Known Bugs**

Users when editing their profile can enter any text in the "First and Last Name", "City", and "Pronouns" textbox. A workaround for this is we have included placeholder text in all text boxes to guide users on what they should write while editing their profile.

## User Personas

You can find the 3 user personas we have made [here](deliverables/user-personas).

## References
- Daniel C. (2002). "MAKE PUBLIC AWARE OF WORLD HUNGER". South Florida Sun - Sentinel. [Link](https://www.proquest.com/newspapers/make-public-aware-world-hunger/docview/387991123/se-2)
- UN. "Goal 2: Zero Hunger - United Nations Sustainable Development". [Link](https://www.un.org/sustainabledevelopment/hunger/)
- “Hunger in Washington.” Feeding America, Feeding America, 2023, www.feedingamerica.org/hunger-in-america/washington. Cafb.
- “Hunger Report 2023: Food Insecurity Barely Budged amid Inflation, End of Pandemic Aid.” Capital Area Food Bank, Capital Area Food Bank, 27 Sept. 2023, www.capitalareafoodbank.org/blog/2023/09/12/hunger report-2023/#:~:text=The%20pandemic’s%20ongoing%20economic%20upheaval,region%2C%20according%20to%20the%20survey.
- Mansfield, Heather. “6 Reasons Why People Do Not Donate Money to Charity.” Nonprofit Tech for Good, Nonprofit Tech for Good, 18 Oct. 2020, www.nptechforgood.com/2020/10/18/6-reasons-why-people-do-not-donate-money-to-charity/.

### Links to images
- https://stock.adobe.com/images/food-drive-grocery-donation-as-charity-product-share-for-poor-outline-concept/412082966
- https://www.shutterstock.com/search/cash-donation-box
- https://www.cspdailynews.com/foodservice/steal-idea-help-reduce-food-waste
- https://deohs.washington.edu/nwcohs/blog/policy-informing-research-economic-determinants-health
- https://www.vecteezy.com/vector-art/13339301-volunteer-holds-a-box-of-food-food-donation-concept-humanitarian-assistance-to-poor-people-charity-and-donation-cartoon-flat-vector-illustration-isolated-on-white-background
- https://stock.adobe.com/images/volunteer-distributing-food-to-people-during-coronavirus-covid-19-epidemic/346032075
- https://www.charitynavigator.org/about-us/link-to-us/
- https://www.vecteezy.com/vector-art/357012-vector-globe-icon
- https://www.vecteezy.com/vector-art/14215095-magnifying-glass-line-icon-on-white-background
- https://github.com/logosv







