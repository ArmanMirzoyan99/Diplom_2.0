import { t } from 'i18next'

export const checkImage = (file) => {
    let err = ""
    if(!file) return err = t("file_not_exist")

    if(file.size > 1024 * 1024) // 1mb
    err = t("lg_img_size_1mb")

    if(file.type !== 'image/jpeg' && file.type !== 'image/png' )
    err = t("img_incorrect")
    
    return err;
}


export const imageUpload = async (images) => {
    let imgArr = [];
    for(const item of images){
        const formData = new FormData()

        if(item.camera){
            formData.append("file", item.camera)
        }else{
            formData.append("file", item)
        }
        
        formData.append("upload_preset", "ndgg6wmv")
        formData.append("cloud_name", "elektron")

        const res = await fetch("https://api.cloudinary.com/v1_1/elektron/upload", {
            method: "POST",
            body: formData
        })
        
        const data = await res.json()
        imgArr.push({public_id: data.public_id, url: data.secure_url})
    }
    return imgArr;
}