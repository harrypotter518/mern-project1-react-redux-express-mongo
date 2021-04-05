import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  search: {
    display: 'block',
    background: theme.palette.background.paper,
    marginBottom: 10,
    borderRadius: theme.rounded.medium,
    boxShadow: theme.shadows[2],
    '& > div': {
      width: '100%',
      border: 'none'
    },
    '& input': {
      padding: '16px'
    }
  }
});

class SearchIcons extends React.Component {
  render() {
    const { filterText, classes, handleSearch } = this.props;
    return (
      <FormControl fullWidth className={classes.search}>
        <Input
          id="search_filter"
          type="text"
          placeholder="Search more than 800 icons"
          value={filterText}
          onChange={handleSearch}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton aria-label="Search filter">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>
    );
  }
}

SearchIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchIcons);
