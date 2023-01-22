# DressMe

## Preview: [Link to GitHub Pages][gitpages]

Note: Due to some technical issues related to gh-pages and React Router campatibility users can get a 404 error when they try to navigate to different parts of my application.
For now by pressing a link above you will get to a blank page with header. Just press menu button and press Home to navigate to the starting page and then everything should work. The direct navigation to Home will cause a 404 error.

### Overview

- Intro
- Technologies
- Features
- General
- Additional Info
- Next Steps

**Intro**

"DressMe" - an application that helps the user build sets of clothing items, including shirts, pants and shoes from a database of clothing items that describes a user's wardrobe.

**Technologies**

- React.js
- Redux

**Features**

- The project is a SPA bootstrapped with [Create React App][cra]
- Page header is simple and includes an application name(which also used as link to home screen), screen/page name header and menu with navigation panel.
- Navigation is performing using a navigation panel which opens by pressing a menu button. Implemented using NavLink components.

- On "Home" screen saved sets counter which, also acts as a link to the "Saved Sets" screen, its' value takes into account the saved set from the previous browsing sessions by pdating sets from the local storage. Also available shirts, pants and shoes counters available followed by 3 big Cards, by pressing on them we choose a type of clothing items we want to see and are redirecting' to the "Items" screen

- On "Items" screen we can find a list of available items with basic info about each one: brand, size and color. A picture is generic but it's border color is changing depending on items' color property. In order to choose a card just press on card itself. When pressed the current card is saved to current set and removed from the list of available items and another list of another item type appears on the screen. If you choose 3 items the saved sets list is updated with the new one and the current set is got reset.
- Cards filtering: I use 2 filters. I used a filter menu of ksp.co.il website as an example. If all checkboxes are empty (unchecked) we can see all available items of the selected type, if one checkbox is checked we will see all possible variations for selected option: for example if color set to 'green' we wil get all green items of all sizes - [specific color] AND any of available sizes. If checkboxes of different filter groups are set - we get a stricted filtering - [1 or set of colors] AND [sizes set].

- Saved Sets are displaying as set of cards of set of cards (you can see in code that card lists an cards components are reused all over the project). By pressing on delete button the set is removed from the state variable as well as from the local storage and the counters and states are updated

Note: the basic suggestion alghoritm will be implemented soon: 1. We take a range of sizes for each type of clothes and divide them by 4 (Reason: the shortest range is shirts sizes range: S, L, XL ,XXL.Optionally divide by Greatest Common Divisor to handle more complex problex with varying range - still didn't decide). In other word we create 4 buckets where we group the sizes of each type together. For example in bucket 4 we will put the biggest sizes of all types of item.
A color suggestion will be more simpler: shirts and shoes will be adviced to wear of the same color while pants will be always suggested of different from shirt/shoes color first.
The best suggestion in descending order: [suggested_size] AND [suggested_color], then [suggested_size] OR [any_other_color], then other sizes one by one where the priority is for suggested color first.

**Additional Info**

- Image files are compressed to use in Web.
- For now the project is not responsive and currently it's adapted for mobile use only

**Next steps**

Few improvements are planned in the near future:

- Responsive design.
- Design Design Design.
- Code refactoring: move reusable blocks of code to separate files.
- Improve a next item suggestion logic.
- Add footer

**Run on your local machine**

- (Reminder: [GitHub Pages][gitpages] available for the preview)

1. Clone the repo using a **_git clone [repo URL]_** command in CLI
2. Inside the downloaded folder run: **_npm install_**
3. Then run: **_npm run start_** for the dev version: open [http://localhost:3000][localhost] or **_npm run build_** for production version

[gitpages]: https://sashadar.github.io/dress-me/
[cra]: https://github.com/facebook/create-react-app
[localhost]: http://localhost:3000
