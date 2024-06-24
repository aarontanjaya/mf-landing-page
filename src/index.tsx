import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@mui/material'
import { APIProvider } from '@vis.gl/react-google-maps'

const theme = createTheme({
  typography: {
    fontFamily: ['"TT Commons"', 'sans-serif'].join(','),
    fontSize: 16
  },
  palette: {
    primary: {
      main: '#002D74'
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ''}>
        <App />
      </APIProvider>
    </ThemeProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
