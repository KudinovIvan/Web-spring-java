# Web-spring-java
# Initial data
About the company: a microenterprise that produces chemical products (detergents for dishes, glasses, cars (+ additional means with wax content), fertilizers based on glycerin, with the possibility of pickup or delivery to a warehouse (delivery to retail outlets is not considered).
Production and delivery of products is carried out in different volumes and containers (from cans of 5 liters to orders of 2-3 tons). Also individually used containers that are convenient for the customer (for example, detergent in a bottle of no more than 1 liter, or in barrels). The company has a stock of the product, but ordering a large volume or in a specific container increases the delivery time.
The purpose of this project is to optimize the work of the sole proprietor, as well as to increase the income and reliability of the system.
The system searches for contests, clients, events where you can sell your product.
# Authorization function
## Description
When logging in, there are two text fields and a button ("Login"). The priority is high.
# ![Picture1](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture1.png)
# ![Picture2](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture2.png)
# ![Picture3](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture3.png)
# Search for purchase orders function
There is a horizontal menu in the upper part of the application after authorization:
1. "Bell" (switches to a reminder about the deadline for the end of the competition)
2. "List" (switches to showing the results of the contest)
3. "Exit" (exits the application)
# ![Picture4](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture4.png)
The "Bell" and "List" buttons display the availability of updates –the icons are displayed in red. When you click on the button, the color becomes standard.
# ![Picture5](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture5.png)
The main user page contains workspaces: the "User" has one – "User" (the Search for purchase orders function), the "Director" and "Administrator" have two.
____
**User**
# ![Picture6](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture6.png)
The " Director "has the" User "workspace on the left (the Search for purchase orders function), and the" Director " (the View documents function)on the right
____
**Director**
# ![Picture7](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture7.png)
The "Administrator" in the upper part of the workspace, located on the left, has a horizontal menu that consists of two tabs: "Director" (Document Viewing function) and "Administrator" (User Curation function).
The administrator cannot open two tabs at the same time.
____
**Admin**
# ![Picture8](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture8.png)
The search for purchase orders consists of: a text field for keyword search, the "Find" button, an extended search ("Advanced Search"), as well as a table consisting of the fields "tender code", "Tender name", "Object of purchase", "Purchase status", "Initial price", "Subject of the Russian Federation".
# ![Picture9](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture9.png)
To save the purchase application, you need to view the application, click the "Submit an application" button, and then click the "For revision" button ‒ the application will be saved in the"Reminder of the deadline for the end of the competition".
# The Keyword Search function
Keyword search consists of entering keywords into a text string and clicking on the "Find" button.
# ![Picture10](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture10.png)
# Advanced Search function
When you click on the "Advanced Search" button, several text fields will appear under the text field.
# ![Picture11](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture11.png)
# The View Purchase request function
Viewing the purchase order is:
1. information about the purchase (tender code, tender name, type of purchase, initial price, status, object of purchase);
2. the "Apply" button (located on the bottom right, when turning the page, the button remains hanging at the bottom);
3. the"Exit" button;
4. information about the organizer (Name, TIN, phone, mail, address).
# ![Picture12](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture12.png)
# ![Picture13](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture13.png)
After clicking on the "Submit an application" button, the user goes to the "Forming an application for participation" window. After clicking on the "Exit" button, the user returns to the search results.
The "Log out" and "Submit an application" buttons always hang at the bottom of the page. These two buttons are located at the maximum distance from each other.
# Function Forming an application for participation
The formation of the application for participation is:
1. a text field for describing an additional document (maximum length of 100 characters, only letters);
2. the ability to upload the file "Other documents" (it is also possible to delete and edit the path to the file – two buttons next to it);
3. the ability to upload the "Letter of Guarantee" file (it is also possible to delete and edit the path to the file – two buttons next to it);
4. the text field for entering "Phone" (only the numbers on the mask +7-000-00-00);
5. text field for entering "Product name" (maximum length of 100 characters, only letters);
6. text field for entering "Trademark" (maximum length of 100 characters, only letters);
7. text field "Volume" (numbers only);
8. EI list ("pcs" and "L");
9. text field for entering "Price" (only numbers + mandatory currency indication);
10. calendar "Delivery time".
#
At the bottom of the window there are two buttons: "Send" and "Specify" at the farthest distance from each other. When you click on the "Submit" button, the user goes to send an application for participation. When you click on the "Refine" button, the application goes to the refinement. A new contest appears in the Reminders about the deadline for the end of the competition.
# ![Picture14](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture14.png)
# ![Picture15](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture15.png)
After clicking the "For revision" button, the user returns to the search results. A window with the text is displayed: "The application for participation no. ____(the number of the application for participation) has been submitted for clarification. Don't forget to add it to __.__.____(the end date of the purchase)" and the "Ok" button, while the user's workspace is darkened. It is not possible to resend the application in the application.
# ![Picture16](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture16.png)
# The function of clarifying the application for participation
To clarify the application for participation, the user needs to click on the reminder, select the application for participation from the list and go to the clarification of the application.
# ![Picture17](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture17.png)
# The function of sending an application for participation
A window with the text is displayed: "Application for participation no. ____(application number for participation) has been sent to the director for verification" and the "Ok"button.
# ![Picture18](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture18.png)
# The Reminder function about the deadline for the end of the competition
The reminder about the deadline for the end of the competition is a list of applications for participation that the user has not finalized (for example, he has not uploaded all the documents) in the order of expiration, with the end date highlighted in red (red – less than 7 days before the end, yellow – more than 7 days before the end).
# ![Picture19](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture19.png)
# The function Showing the results of the contest
The display of the contest results is a list of applications for participation that the user sent with their highlighting in color (green – won the contest, red – lost).
# ![Picture20](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture20.png)
# User Curation function
User curation consists of a table that displays users with a checkbox, a text field for entering user login, three buttons ("Find", "Add", "Change status"; the buttons are located next to the text field) and two buttons ("Remove all checkboxes" and "Delete") at the bottom right of the page. The first row of the table consists of
from three fields (a checkbox that selects all users, "FULL name" and login).
# ![Picture21](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture21.png)
After entering the login in the search bar and clicking on the "Find" button, the search result is displayed on the screen (Fig. 25), that is, an employee with this login. If there is no employee with this username, an error message appears. When you click the "FULL name" or "Login" field, the sorting changes (from " A " to " Z "/ from "I" to "A").
# ![Picture22](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture22.png)
# Add new Users function
A window consisting of two text fields (for entering the full name and login), a generated password, a red message "Be sure to write down the password", a list of roles ("User", "Administrator", "Director") and two buttons" OK " and closing the window. The " OK " button is located in the lower right part of the window. The close window button is located in the upper right part.
# ![Picture23](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture23.png)
When you click on the " + " button, a window appears. After entering the correct data and clicking the " OK " button, a new user is added to the system and a message appears confirming that a new user has been added to the system. If the data is entered incorrectly, the frame of the text field is colored red, a message appears stating which rule has been violated.
# ![Picture24](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture24.png)
# ![Picture25](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture25.png)
# ![Picture26](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture26.png)
# Delete Users function
A window with a list of all the full names that the administrator has chosen, and the message "Are you sure you want to delete the user (s)?" and two buttons ("Yes" and "No") located far enough from each other.
# ![Picture27](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture27.png)
When you select one or more checkboxes located next to user logins and click on the "Delete" button, a window appears, the workspace is darkened. When you click "Yes", the user(s) are deleted from the database and a window appears with a message about deleting the user(s). After clicking the " OK " button, both windows are closed. When the "No" button is pressed, the window closes.
# ![Picture28](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture28.png)
# Function Setting user rights
A window with three radio buttons ("User", "Director" and "Administrator") and two buttons ("OK" and "Exit"). There is no possibility to select a role that the user already belongs to.
# ![Picture29](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture29.png)
When you select one checkbox located next to the user and click on the "Configure rights" button, a window appears, while the workspace is darkened. When you click on the button ("OK"), the user changes the role and a window appears with a confirmation of the role change and the "OK" button. After closing the second window, the first one also closes.
# ![Picture30](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture30.png)
# View Documents function
A window that displays the data on the application for participation sent to the user, with the "Clarify" and "Send" buttons.
The table of the "Director" workspace displays the applications submitted for consideration.
# ![Picture31](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture31.png)
The table consists of the columns "tender code", "Tender Name", "Purchase object", "Purchase status"," Initial price","Subject of the Russian Federation". When you click on the application, a window for Viewing documents appears.
# ![Picture32](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture32.png)
When you click on the "Refine" button, the application goes to completion. When you click on the "Submit" button, the application is sent to the procurement site. In this case, the director returns to the list of documents.
# The function Sending for revision
The director displays a window with the text: "The application for participation has been submitted for revision.". The user has a window with the text: "The application for participation no. _ _ _ _ _ (the number of the application for participation) has been submitted for revision. Don't forget to add it to __.__.____(purchase end date)" and the "Ok"button
# ![Picture33](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture33.png)
# The function of Sending to the site with purchases
A window opens with the text: "Application for participation no. _ _ _ _ _ (application number for participation) was sent to an external source." After receiving it, the response is displayed on a third-party resource: "Application for participation no. _ _ _ _ _ (application number for participation) was received." and the "Ok"button.
# ![Picture34](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture34.png)
# Log out function
On the right side of the upper part of the application, the Director, the Simple User and the Administrator have a "Log out" button. The priority is low.
# ![Picture35](https://github.com/KudinovIvan/Web-spring-java/blob/Example/assets/Picture35.png)
