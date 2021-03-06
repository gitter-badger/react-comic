var React = require('react');
var Breadcrumbs = require('./breadcrumbs');
var Page = require('./page');
var ReturnTop = require('../common/returnTop');
var NextChapter = require('./nextChapter');

var Pages = React.createClass({
  getInitialState: function () {
      return {
          loadPageCount: 1
      }
  },
  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll, false);
  },
  componentWillUnmount: function() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  handleScroll: function() {
    var nextChapter = $("#next-chapter");
    if (nextChapter.length <= 0) {
      return;
    }
    if ($.active > 0) {
      return;
    }
    if (nextChapter.position().top < $(window).scrollTop() + $(window).height()) {
      this.loadNextPage();
    }
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      nextChapter.removeClass('hidden');
    }
  },
  loadNextPage: function() {
    if (this.props.pages.length <= this.state.loadPageCount)
      return;
    this.setState({loadPageCount: this.state.loadPageCount + 1});
  },
  render: function() {
    var loadPage = [];
    for (var i = 0; i < this.state.loadPageCount; i++) {
      var url = this.props.pages[i];
      loadPage.push(url);
    }
    var pageNodes = loadPage.map(function(result, index) {
      return <Page url={result} key={index} />
    });
    return (
      <div>
        <Breadcrumbs
          catalog={this.props.catalog}
          chapter={this.props.chapter}
          nextChapter={this.props.nextChapter}
          prevChapter={this.props.prevChapter}
        />
        <div className="page text-center">
          {pageNodes}
        </div>
        <div className="text-center">
          <NextChapter catalog={this.props.catalog} nextChapter={this.props.nextChapter} />
        </div>
        <ReturnTop />
      </div>
    );
  }
});

module.exports = Pages;
