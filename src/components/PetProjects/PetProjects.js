import React from 'react'
import './petProjects.css';

const PetProjects = () => {

    return(
        <div>
            <h1 className='set'>
                Pet Projects
                <img className="img" width='50' src="https://cdn3.iconfinder.com/data/icons/design-and-development-2-6/136/51-256.png"/>
            </h1>
            
            <div className='pet_pro'>

                <div>                    
                    <b>Distant Speech Recognition | Dec 20  </b> 
                    <div className="para">
                        In this project we have implemented the 7 AI DL and ML (KNN, CNN, LSTM etc) 
                        model using assemblylearning to recognize the english word from an audio. 
                        
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Speech_to_text'>
                        Project</a>    
                    </div>
                </div>

                <div>                    
                    <b>Mask Detection Model | Nov 20</b>                
                    <div className="para">
                        A real time Mask detection using SSD_Mobilenet v1which can detect mask in a frame. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Mask_Detection'>
                        Project</a>  
                    </div>
                </div>

                <div>                    
                    <b>Facial Expression | Nov 20  </b>                
                    <div className="para">
                        A CNN base model which can tell you the mood of theperson means how a person is feeling right now. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Emotion-AI-Facial-Key-points-Detection'>
                        Project</a>  
                    </div>
                </div>


                <div>                    
                    <b>Image Noise Detection with Autoencoder | Nov 20 </b>                
                    <div className="para">
                        Enhance the Image quality by using autoencoder usingDense layers  by Tensorflow. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Image-Noise-Reduction-with-Auto-encoders-using-TensorFlow'>
                        Project</a>  
                    </div>
                </div>

                
                <div>                    
                    <b>Deepfake with keras | Oct 20 </b>                
                    <div className="para">
                    A DCGAN base model which is producing images of digit0 like MNIST dataset. 
                    <a className='link' target="_blank" href='https://github.com/Asharib90/Understanding_deepFake_with_Keras'>
                        Project</a>  
                    </div>
                </div>

                <div>                    
                    <b>Optical Character Recognition | Oct 20 </b>                
                    <div className="para">
                        Real time OCR which converts images into text. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/OCR'>
                        Project</a>  
                    </div>
                </div>

                <div>                    
                    <b>Smart Brain | Aug 20 </b>                
                    <div className="para">
                        A MERN stack base web application which recognizesa face of a human and creates a bounding box by
                        using Machine Learning algo using RestFull Api’s. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Face_Recognition_Brain'>
                        Project</a>  
                    </div>
                </div>    
                
                <div>                    
                    <b>Hotel Management System | Mar 20 </b>                
                    <div className="para">
                        A hotel management system based on .net frameworkwhich helps to record and manage all the activities
                        of hotel management including its kitchen. 
                        <a className='link' target="_blank" href='https://github.com/Asharib90/Hotel-Manegment-System'>
                        Project</a>  
                    </div>
                </div>

            </div>
        </div>
    )    
}
export default PetProjects
