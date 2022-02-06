# Kaleidoscope Rails React Streaming SPA
[Check out the demo here🎬](https://drive.google.com/file/d/1SwbOXUKy4HXsCxGKzT5KuOr6SqxColux/view?usp=sharing)

## Description
This is a Simple Streaming Application. It allows users CRUD functionality for their own streams.

Similar to large scale counterparts, it is designed for straightforward use with minimal explanation required for the user.


 ## Set-Up 
   * Clone this repo to your local environment
   * From within the repository you just cloned, cd to 'backend', then run 'bundle install' and 'npm install', then cd to 'rtmpserver' and run 'npm install' in the terminal 
   * Return to the 'backend' directory, then run 'rails db:migrate' to migrate all the tables for the backend 
   * Run 'rails s' to start the app server
   * Open another terminal and cd to the 'rtmpserver' directory, run 'npm start' to start the RTMP server
   * From within your web browser, go to localhost:3000 to interact with the application as a user
   * Open OBS, configure stream settings for custom streams and start streaming -set STREAM KEY wihtin OBS to the id value displayed in the address bar for the stream being viewed
   * Enjoy viewing your own stream online!
   

## Contributing
Bug reports and pull requests are welcome on GitHub at https://github.com/mwpenn94/kaleidoscope. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the code of conduct.

## License
The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct
Everyone interacting in Kaleidoscope's project's codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/mwpenn94/Kaleidoscope-Rails-React-Streaming-SPA/blob/main/CODE_OF_CONDUCT.md).
