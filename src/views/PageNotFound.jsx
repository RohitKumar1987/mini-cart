import React from 'react'
import CustomImage from '../components/atoms/CustomImage'
import CustomParagraph from '../components/atoms/CustomParagraph'
import ConstantString from '../AppConfig/AppConstantString'
import AppAssets from '../AppConfig/AppAssets'

const PageNotFound = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="container text-center">
          <div className="page-not-found">
            <CustomImage imgSrc={AppAssets.error404} />

            <CustomParagraph text={ConstantString.PAGE_NOT_FOUND_TEXT} />
          </div>
        </div>
      </div>
    </>
  )
}
export default PageNotFound
