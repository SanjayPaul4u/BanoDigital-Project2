import React, { useContext, useRef} from 'react'
import getCookie from '../../hooks/getCookie'
import { useNavigate } from 'react-router-dom';
import ReviewContext from '../../context/review/reviewContext';
    

const EditReviewModal = (props) => {
    const {editIconClickRef, reviewDetailForEdit, setReviewDetailForEdit, id} = props;

    // use "useNavigate" 📌
    const navigate = useNavigate();

    // using "useCotext" 📌
    const review_context = useContext(ReviewContext);
    const {editReviewApicall} = review_context;//📌📌📌📌📌📌📌📌📌📌📌📌📌

    // using "useRef" 📌
    const modalCloseRef = useRef();
    
    // RATING COUNT FUNCTION 📌
    const ratingCountFunc = (countNumber)=>{
        if(getCookie("bdigital-token")){
        setReviewDetailForEdit({starCount:countNumber, reviewMsg: reviewDetailForEdit.reviewMsg});
        }else{
        navigate('/login')
        }
    }

    // ON CHANGE FUNCTION 📌
    const onChangeFunc = (event) =>{
        if(getCookie("bdigital-token")){
        setReviewDetailForEdit({starCount:reviewDetailForEdit.starCount, reviewMsg:event.target.value});
        }else{
        navigate('/login')
        }
    }


    // REVIEW SUBMIT FUNCTION📌
    const editReviewSubmitFunc = async(event) =>{
        event.preventDefault();
        const data = await editReviewApicall(reviewDetailForEdit, id);
        if(data.success){
        setReviewDetailForEdit({starCount:0, reviewMsg: ""});
        }
        modalCloseRef.current.click();
    }  



  return (
    <div>        
        {/* <!-- Button trigger modal --> */}
        <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModalCheckLikes" ref={editIconClickRef}>
        Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModalCheckLikes" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                {/* <h5 className="modal-title" id="exampleModalLabel"></h5> */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={modalCloseRef}></button>
            </div>
            <div className="modal-body">
                {/* EDIT REVIEW - BODY - START*/}
                <div id="add-review-div">
                    <h5>Edit Your Rating & Review</h5>
                    <div id="rating-stars">
                    
                    {/* START 1 📌 */}
                    <i id='rating-star1' className={`fa-regular fa-star
                    ${reviewDetailForEdit.starCount>=1?"clickRatingStar":""}
                    ${reviewDetailForEdit.starCount>=1?"fa-solid":""}
                    `}  onClick={()=>{ratingCountFunc(1)}}></i>

                    {/* START 2 📌 */}
                    <i id='rating-star2' className={`fa-regular fa-star
                    ${reviewDetailForEdit.starCount>=1?"clickRatingStar":""}
                    ${reviewDetailForEdit.starCount>=2?"fa-solid":""}
                    `}  onClick={()=>{ratingCountFunc(2)}}></i>

                    {/* START 3 📌 */}
                    <i id='rating-star3' className={`fa-regular fa-star
                    ${reviewDetailForEdit.starCount>=1?"clickRatingStar":""}
                    ${reviewDetailForEdit.starCount>=3?"fa-solid":""}
                    `}  onClick={()=>{ratingCountFunc(3)}}></i>

                    {/* START 4 📌 */}
                    <i id='rating-star4' className={`fa-regular fa-star
                    ${reviewDetailForEdit.starCount>=1?"clickRatingStar":""}
                    ${reviewDetailForEdit.starCount>=4?"fa-solid":""}
                    `}  onClick={()=>{ratingCountFunc(4)}}></i>

                    {/* START 5 📌 */}
                    <i id='rating-star5' className={`fa-regular fa-star
                    ${reviewDetailForEdit.starCount>=1?"clickRatingStar":""}
                    ${reviewDetailForEdit.starCount>=5?"fa-solid":""}
                    `}  onClick={()=>{ratingCountFunc(5)}}></i>

                    </div>
                    
                    <form onSubmit={editReviewSubmitFunc}>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" id="exampleInputExperience1" aria-describedby="experienceHelp" placeholder='Describe Your Experience' value={reviewDetailForEdit.reviewMsg} name='reviewMsg' onChange={onChangeFunc} minLength={5} maxLength={200}/>
                    </div>

                    <p className={reviewDetailForEdit.reviewMsg.length>0 &&  reviewDetailForEdit.reviewMsg.length<5?"":"d-none"} id="err-showing-p">(At Least 5 Character Require)</p>

                    {/*REVIEW SUBMIT BTN 📌*/}
                    <button type="submit" disabled={reviewDetailForEdit.starCount===0 || reviewDetailForEdit.reviewMsg.length<5} className="btn btn-primary" >Update</button>


                    </form>
                </div>
                {/* EDIT REVIEW - BODY - END*/}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EditReviewModal