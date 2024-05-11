import { useEffect } from "react"

// Dynamic title 
const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-RentUsBd`;
    }, [title])
}

export default useTitle;