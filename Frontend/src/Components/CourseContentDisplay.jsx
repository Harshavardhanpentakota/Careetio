import PropTypes from "prop-types"

export const CourseContentDisplay = ({ course }) => {
  if (!course || !course.sections) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
      {course.sections.map(section => (
        <div key={section.id} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
          <p className="text-lg mb-2">{section.description}</p>
          <ul className="list-disc ml-6">
            {section.topics.map(topic => (
              <li key={topic.id} className="mb-2">
                <h3 className="text-xl font-medium mb-2">{topic.name}</h3>
                <p className="text-lg mb-2">{topic.description}</p>
                <ul className="list-disc ml-6">
                  {topic.resources.map(resource => (
                    <li key={resource.id}>
                      <a href={resource.url} className="text-blue-500 hover:underline">{resource.title}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

CourseContentDisplay.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string.isRequired,
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        topics: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            resources: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
              })
            ).isRequired,
          })
        ).isRequired,
      })
    ).isRequired,
  }).isRequired
};

export default CourseContentDisplay;
