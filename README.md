# button-with-spinner

This is a react native custom button component which supports in react native 0.60 and above.
During API call’s or any time consuming operation, user will be visually informed from the button itself. This custom button will display a spinner when it is clicked to inform user that some processing is going and block the UI until processing is complete.


## Getting started

`$ npm install button-with-spinner --save`

### Mostly automatic installation

`$ react-native link button-with-spinner`
`$ cd ios`
`$ pod install`

### Manual installation


1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-ios-wifi` and add `IosWifi.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libIosWifi.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<


## Usage
```javascript

import SaveButton from 'button-with-spinner';

// Add a state in constructor with name isLoading and update it based on the operation performed

<SaveButton
style={{marginTop: 16}}
buttonStyle={{backgroundColor:'blue'}}
title={"Save"}
isLoading={this.state.isLoading}
onButtonPress={(value) => {
  console.log("Spinner started. It will stop when this.state.isLoading is set to false");
}}/>

```
