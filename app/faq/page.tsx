
import AwardCategories from '../award-categories'
import LiberaQualifications from '../qualifications'
import { LiberaButtonExternal } from '../button'
import Footer from '../footer'

export default function FAQ() {
  return (
    <>
          <title>Libera Awards - Frequently Asked Questions</title>
          <div className="grow shrink content-center">
<h1 className="pt-20 grow font-bold align-middle text-center leading-tight">
  FAQ
  </h1>
  </div>
          <AwardCategories/>
          <LiberaQualifications/>
          <Footer/>
    </>
  )
}
