var Category = React.createClass({
  render: function() {
    var name = this.props.category.name.slice(0, -1);
    return (
      <li className="cateogory">
        <a href="#">{name}</a>
      </li>
    );
  }
});

var Navbar = React.createClass({
  render: function() {
    var categoryNodes = this.props.categories.map(function(category, index) {
      return (
        <Category category={category} key={index} />
      );
    });
    return (
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-305-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">305</a>
          </div>
          <div className="collapse navbar-collapse navbar-305-collapse">
            <ul className="nav navbar-nav">
              {categoryNodes}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var CATEGORIES = [
  {id : 1, name : '爱情类'},
  {id : 2, name : '温情类'},
  {id : 3, name : '校园类'},
  {id : 4, name : '推理类'},
  {id : 5, name : '冒险类'},
  {id : 6, name : '魔幻类'},
  {id : 7, name : '运动类'},
  {id : 8, name : '热血类'},
  {id : 9, name : '科幻类'},
  {id : 10, name : '机战类'},
  {id : 11, name : '武侠类'},
  {id : 12, name : '搞笑类'},
  {id : 13, name : '恐怖类'},
  {id : 14, name : '耽美类'},
  {id : 15, name : '社会类'},
];

ReactDOM.render(
  <Navbar categories={CATEGORIES} />,
  document.getElementById('container')
);
