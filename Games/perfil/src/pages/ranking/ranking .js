'use strict';


    class LikeButton extends React.Component {
      constructor(props) {
        super(props);
        this.state = { liked: false };
      }

      render() {

        return React.createElement(
          <div>              
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel"></div>
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Ranking</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div class="offcanvas-body">
              <ul id="ranking" class="list-group">
                <li class="list-group-item active" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">An item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A second item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A third item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">A fourth item</li>
                <li class="list-group-item" data-bs-toggle="list" role="button">And a fifth one</li>
              </ul>
            </div>
          </div>
        );
      }
    }













  const e = React.createElement;
  const domContainer = document.querySelector('#like_button_container');
  const root = ReactDOM.createRoot(domContainer);
  root.render(e(LikeButton));





