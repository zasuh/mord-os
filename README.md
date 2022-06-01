# 🧐 MORD OS

## Getting Started 🗺️

Run `npm install` and then either `npm start` or `yarn start` to build the application. The application runs on port 3000.

To login use `borgoth@mordos.com` as the email and `12bindthem`. The credentials save into session storage. The user cannot access the home or `/` page untill he/she authenticates through the `/login` screen.

## Features 🕹️

### File Directory 📁

The file directory app opens with 5 mocked text files and an "Add" button which a user can use to add new entries into the list. Each column can be sorted by clicking on the column header. Clicking multiple times changes the sorting from ascending / descending.

The "Add" button opens a sidebar where there is a Title and Content input. The user can use these to enter a new entry. Every row in the list is clickable which allows the user to either edit the title/content or deleting the file entirely.

### Image Gallery 🖼️

The image gallery app is split into two sections, one being the navigation sidebar where the user can switch from viewing all the pictures in the system, to viewing just the json placeholder endpoint images and viewing the pictures taken with the camera app.

### Camera App 📷

The camera app is simple, but integrates with the gallery app. Once opened the app will load a webcam if it's available. The user can then take a picture. The pictures are stored in session storage and can be seen in the Gallery app under "All Images" or "Webcam Images".

### RSS Reader 📰

The RSS Reader app shows a collection of mocked posts and json placeholder posts. Again like the image gallery app the user can view both mocked and placeholder posts or each one individually.

### Browser 🔍

Browsing through Google search can be done use the built in Browser app. It's a simple application imitating Google search where the user can enter a search query and have another tab open with the search run through Google.

### Desktop Toolbar 🧰

The bottom toolbar has a start icon and a search icon imitating the Windows OS. It also has some icons to the right side along with a clock which shows local time. When an app/modal is opened it will display in the bottom bar as though it would in Windows.

## Improvements & ideas ✨

There are some (but definetly not all) ideas/improvements that would enrich the overall user experience even more if this were to be a real life case. The items marked with an emoji are points where I only have a vague idea how to implement it and would probably require a second or more experienced person to either give me ideas or help me with them.

- *Backend implementation*: Implementing a backend would obviously be the first step. Enabling more complete and precise authentication and authorization, saving data to a database and retrieving it without having to utilize session storage.

- *Unified styling*: I tried to keep the design simple and consistent. There are things I don't like about it, on the UI as well as on the UX, that I would maybe do more design research and figure out what would be the best.
