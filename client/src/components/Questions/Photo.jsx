import React, { Component } from "react";

class Photo extends Component {
  render() {
    let photos = this.props.photos;
    return (
      <div>
        {photos.map((photo, index) => {
          return (
            <React.Fragment key={`imagId_${index}`}>
              <img src={photo} width={150} height={90} mode="fit" />
              <span style={{ whiteSpace: "pre-wrap" }}>{`   `}</span>
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Photo;
