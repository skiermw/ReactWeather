var React = require('react');
var {Link} = require('react-router')
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here a few example locations to try</p>
      <ol>
        <li>
          <Link to='/?location=Columbia, MO'>Columbia, MO</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil MO</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
