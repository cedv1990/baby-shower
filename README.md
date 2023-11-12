# baby-shower🤵🏻‍♂️🤵🏼‍♀️

The current project is about managing guests confirmation and view the list of confirmed guests for organizing all the preparations of my wedding.

I used the follow technologies:

- React
- Firestore: Oriented Document Database
- Github
- SASS: by myself, with flex layout.

## Flow

- Admin (https://cedv1990.github.io/baby-shower/?admin=true):

  - The web page that retrieves the complete guest list is stored in the "families" collection.
  - I used the Google API for getting the data similar to an API Restful (/collection/document/...).
  - Also, the family card shows if each member is confirmed.
  - The card changes its color when all the members are confirmed or don't.
  - When the family card is clicked, the invite URL it's automatically copied to the clipboard.
  
- Confirmation page (https://cedv1990.github.io/baby-shower/?id=XXXXXXXXXX):
  - The web page shows the family information (family name), wedding location, and a button to confirm assistance.
  - I used the Google API for getting the family data from the document (`families/{family-id}`) and the guest list from it's collection `guests` (`families/{family-id}/guests`).
  - When the confirm button is clicked, the page shows the family members to do the confirmation process.
  - When the member confirms, it displays another option to say if the member needs transportation.
  - Both clicks send the info to firestore.

## Database screenshot 📸

![image](https://user-images.githubusercontent.com/12788783/128958856-6e1c6ea1-8bcb-4840-9ef2-bf7d5f03967f.png)

## How do I run the project? 🏍💨

- run `npm i`
- run `npm start`
- enjoy and confirm 🕺🏻💃🏻
