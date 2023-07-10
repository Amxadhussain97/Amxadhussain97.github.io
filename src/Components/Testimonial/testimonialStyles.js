import { makeStyles } from "@mui/styles";


export const useTestimonialStyles = makeStyles((theme) => ({
    testimonial: {
      position: 'relative',
      padding: '4rem 10%',
      background:"#F8F7F1",
      width:'100vw',
      '& .heading': {
        textAlign: 'center',
        '& p': {
          lineHeight: '30px',
        },
        '& >:nth-child(2)': {
          marginTop: '2rem',
          marginBottom: '0.1rem'
        }
      },
  
      [theme.breakpoints.down('sm')]: {
        padding: '2rem'
      },
      
      '& .comments': {
        padding: '2rem 0',
        '& .slider': {
          '& .slick-list': {
            margin: '0 -7px',
            boxSizing: 'initial',
            padding: '80px 0px',
            overflowY: 'visible',
            '& .slick-next': {
              right: 0,
              background: '#000',
              color: '#fff'
            },
            '& .slick-arrow .slick-prev': {
              left: 0
            },
            '& .slick-slide>div': {
              padding: '0 20px'
            },
            '& .slick-slide.slick-active.slick-current + .slick-slide': {
              transition: 'all 1000ms ease-out',
              scale: 1.1,
              transform: 'translateY(-30px)'
            }
          }
        },
        '& .person': {
          boxShadow: 'rgb(0 0 0 / 5%) -3px 11px 13px 0px',
          padding: '2rem',
          display: 'flex !important',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1rem',
          background: '#fff',
          borderRadius: '20px',
          position: 'relative',
          '& img': {
            width: '3.5rem',
            height: '3.5rem',
            margin: 'auto',
            borderRadius: '100%',
            position: 'absolute',
            top: '-2rem',
            objectFit:"cover"
          },
          '& p': {
            fontSize: '0.8rem',
            lineHeight: '26px',
            marginTop:'20px'
          },
          '& hr': {
            width: '100%',
            border: '.2px solid rgb(234, 234, 234)'
          },
          '& .bio': {
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            textAlign: 'center',
            '& >:nth-child(1)': {
              fontWeight: 600,
              
            },
            '& >:nth-child(2)': {
              fontSize: '0.6rem',
              color: 'rgb(172, 172, 172)'
            }
          }
        }
      }
    }
  }));