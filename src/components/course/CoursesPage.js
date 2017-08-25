import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Courses</h1>
        {this.props.children}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  children: PropTypes.object.isRequired
};

export default CoursesPage;
