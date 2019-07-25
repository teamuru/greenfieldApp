import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
const Photo = ({ photos }) => {
  const [open, setOpen] = React.useState(false);
  const [photo, setPhoto] = React.useState(false);

  function handleClickOpen(photo) {
    console.log("click photo", photo);
    setOpen(true);
    setPhoto(photo);
  }

  function handleClose() {
    setOpen(false);
  }
  // const handleClick = () => {
  //   console.log("click photo");
  //   handleClickOpen()
  // };
  return (
    <div>
      {photos.map((photo, index) => {
        return (
          <React.Fragment key={`imagId_${index}`}>
            <button style={{ border: "none", cursor: "pointer" }}>
              <img
                src={photo}
                width={150}
                height={90}
                mode="fit"
                onClick={() => {
                  handleClickOpen(photo);
                }}
              />
            </button>
            <span style={{ whiteSpace: "pre-wrap" }}>{`   `}</span>
          </React.Fragment>
        );
      })}
      <Dialog open={open} onClose={handleClose} fullScreen>
        <img src={photo} onClick={handleClose} />
      </Dialog>
    </div>
  );
  // }
};

export default Photo;
