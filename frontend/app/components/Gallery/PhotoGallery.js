import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import 'enl-styles/vendors/image-lightbox/image-lightbox.css';
import ImageLightbox from '../ImageLightbox/ImageLightbox';
import styles from './photo-jss';

function PhotoGallery(props) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const { classes, imgData } = props;

  const openPopup = index => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div>
      {isOpen && (
        <ImageLightbox
          mainSrc={imgData[photoIndex].img}
          nextSrc={imgData[(photoIndex + 1) % imgData.length].img}
          prevSrc={imgData[(photoIndex + (imgData.length - 1)) % imgData.length].img}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + (imgData.length - 1)) % imgData.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % imgData.length)}
        />
      )}
      <div className={classes.masonry}>
        {
          imgData.map((thumb, index) => (
            <figure className={classes.item} key={index.toString()}>
              <ButtonBase
                focusRipple
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                onClick={() => openPopup(index)}
              >
                <img src={thumb.img} alt={thumb.title} />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    className={classes.imageTitle}
                  >
                    {thumb.title}
                    <span className={classes.imageMarked} />
                  </Typography>
                </span>
              </ButtonBase>
            </figure>
          ))
        }
      </div>
    </div>
  );
}

PhotoGallery.propTypes = {
  classes: PropTypes.object.isRequired,
  imgData: PropTypes.array.isRequired
};

export default withStyles(styles)(PhotoGallery);
