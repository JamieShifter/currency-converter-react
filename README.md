# Welcome to Currency Converter 1.2!

This little website lets you convert between various currencies. For now I limited the number of available currencies to **8** and guess what - Bitcoin is one of them!

Here's the link: [CC1.2](https://jamieshifter.github.io/currency-coverter-react/)

## How to use it?

First you need to choose the currencies you want to convert **FROM** and **TO**.
To do this - you simply use the drop-downs and click the desired currency.
Then you just need to write the amount of money to want to convert in the first "Amount" field
> **Note:** You can also use the arrows in the field for small step changes(0.01) 

That's it! The calculation should be done automatically without you having to click anything else

## "Reverse" button

You can click the "Reverse" button to switch the currencies backwards:
* In the first currency field I have EUR
* In the second currency field I have USD
* I click "Reverse" button
* Now USD is in first field and EUR is in second
* RECALCULATION follows!

## From where do I get the ratios

Currently the ratios for currencies are fixed, the long term goal however is to get them from a live site via API(probably).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

