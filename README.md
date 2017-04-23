# fb-get-started-button
A wrapper around the POST and DELETE requests used to add and remove the "Get Started" button for Facebook Messenger
https://developers.facebook.com/docs/messenger-platform/thread-settings/get-started-button

## Install
```
$ npm install -g fb-get-started-button
```

## Usage
```
$ fb-get-started-button add <YOUR PAGE ACCESS TOKEN>
Adding "Get Started" button with the payload "GET_STARTED"
Successfully added new_thread's CTAs

$ fb-get-started-button add <YOUR PAGE ACCESS TOKEN> --payload MY_CUSTOM_PAYLOAD
Adding "Get Started" button with the payload "MY_CUSTOM_PAYLOAD"
Successfully added new_thread's CTAs

$ fb-get-started-button remove <YOUR PAGE ACCESS TOKEN>
Removing "Get Started" button
Successfully deleted all new_thread's CTAs
```
