# Funky Videos App

#### Please, use develop branch for developing

First install all npm dependencies
`npm i`

To start app
`npm start`

To build with webpack
`webpack`

Surf to http://localhost:3000/#/ and enjoy!

#### Deploy to heroku
Install heroku toolbelt [https://toolbelt.heroku.com]
Run `webpack -p --config webpack.production.config.js` for correct production build
Then follow guidlines for deploy 
`git add .`
`git commit -m 'make it better'`
`git push heroku master`


#### Running production config
make sure to set following environment variables NODE_ENV=production and PORT=**

Run `webpack -p --config webpack.production.config.js` to create production /build folder in /app folder
Run 'npm start' to startup node server
  
    

#### ffpeg
To make it work prpoperly, you should install ffmpeg locally

`brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r
--with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr
--with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex
--with-theora --with-tools --enable-libass`


#### dropbox access
To upload files to dropbox (templater), following environment variables should be set
export DB_KEY=***
export DB_SECRET=***
export DB_TOKEN=***