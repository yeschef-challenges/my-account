import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    primary: { main: '#4367B2' },
    secondary: { main: '#FFFFFF' },
  },
  overrides: {
    MuiButton: {
      root: {
        minHeight: '56px',
        fontSize: '14px',
        color: '#FFFFFF',
        borderRadius: '6px',
        fontWeight: 600
      },
      contained: {
        backgroundColor: '#FF007F',
        color: '#FFFFFF',
        '@media (hover: none)': {
          '&.withoutHover:hover': {
            backgroundColor: '#FF007F',
          }
        }
      }
    },
    MuiInputBase: {
      root: {
        color: '#FFF',
      },
    },
    MuiFormControl: {
      marginNormal: {
        marginTop: 0,
        minHeight: '75px'
      }
    },
    MuiOutlinedInput: {
      root: {
        position: 'relative',
        '& $notchedOutline': {
          borderColor: 'rgba(255, 255, 255, 0.5)',
        },
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: 'rgba(255, 255, 255, 0.5)',
          '@media (hover: none)': {
            borderColor: 'rgba(255, 255, 255, 0.5)',
          },
        },
        '&$focused $notchedOutline': {
          borderColor: 'rgba(255, 255, 255, 1)',
          borderWidth: 1,
        },
      },
      input: {
        fontSize: '14px'
      }
    },
    MuiTabs: {
      root: {
        minHeight: '30px',
        marginLeft: '-24px',
        marginRight: '-24px'
      },
      indicator: {
        backgroundColor: '#FF007F'
      }
    },
    MuiTab: {
      root: {
        minHeight: '30px',
        fontSize: '14px',
        fontWeight: 600
      }
    },
    MuiTypography: {
      h5: {
        fontWeight: 600,
        textTransform: 'uppercase'
      }
    },
    MuiFormHelperText: {
      root: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: '11px',
        "&$error": {
          "color": "#CF6679"
        }
      }
    }
  }
});

export default theme;