import axios from 'axios';
import { useState, useEffect } from 'react';
import PicModal from './PicModal';

function PicList(props) {

    const [picList, setpicList] = useState()
    const [loadind, setloadind] = useState(true)

    const [state, setstate] = useState({
        title: '',
        picUrl: ''
    })

    const getPicList = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos?albumId=1')
        setpicList(res.data)
        setloadind(false)
    }

    useEffect(() => {
        getPicList().catch(console.error)
    }, [])

    const openModal = (t, p) => {
        setstate({
            title: t,
            picUrl: p
        })

    }

    if (loadind) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }


    return (
        <div className='row justify-content-center p-0'>

            <div className="col-12 text-center fw-bold mb-3">
                სურათები
            </div>

            {
                picList.map(p => (
                    <div key={p.id} className="col-sm-4 col-md-3 col-lg-2 text-center mb-3">
                        <img src={p.thumbnailUrl} alt='Pic' title={p.title} className='thumb' onClick={() => openModal(p.title, p.url)} data-bs-toggle="modal" data-bs-target="#picModal" />
                    </div>


                ))
            }


            <PicModal t={state.title} p={state.picUrl} />
        </div>
    );
}

export default PicList;