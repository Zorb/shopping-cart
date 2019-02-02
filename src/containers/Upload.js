import ReactS3 from 'react-s3';
import React, {Component} from 'react';
import {accesskey, secretkey} from "../constants/keys";

const config = {
    bucketName: "boots-image-rekog",
    region: "eu-west-1",
    accessKeyId: accesskey,
    secretAccessKey: secretkey
};

class Upload extends Component {
    constructor(props) {
        super(props);

    }

    upload(e) {
        console.log(e.target.files[0]);
        ReactS3.uploadFile(e.target.files[0], config).then((data) => {
            console.log(data)

        }).catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.upload}/>
            </div>
        )
    }

}

export default Upload;