import React from 'react';
import { FormContainer, FormWrapper } from './FormElements';

const Form = () => {
  return (
    <>
      <FormContainer>
          <FormWrapper src="//embed.typeform.com/next/embed.js"
          data-tf-widget="UzH94V4N" 
          data-tf-inline-on-mobile 
          data-tf-medium="snippet" 
          ></FormWrapper>
      </FormContainer> 
    </>
    
  )
}

export default Form

// <!DOCTYPE html> 
//     <html lang="en"> 
//         <head> 
//             <meta charset="utf-8" /> 
//             <meta name="viewport" content="width=device-width, initial-scale=1" /> 
//             <title>Sim Labs Application Form</title> 
//             <style>
//                 * {
//                     margin: 0;
//                     padding: 0;
//                     } 
                    
//                     html, body, #wrapper {
//                         width: 100%;
//                         height:100%;
//                     } 
                    
//                     iframe {
//                         border-radius: 0 !important;
//                     }
//             </style> 
//         </head> 
//         <body> 
//             <div id="wrapper" data-tf-widget="UzH94V4N" data-tf-inline-on-mobile data-tf-medium="snippet" ></div> 
//             <script src="//embed.typeform.com/next/embed.js"></script> 
//         </body>
//     </html>