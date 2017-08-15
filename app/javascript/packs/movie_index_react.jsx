import MovieIndex from 'components/movie_index';
import WebpackerReact from 'webpacker-react';
import Turbolinks from 'turbolinks';

Turbolinks.start();

WebpackerReact.setup({MovieIndex});
