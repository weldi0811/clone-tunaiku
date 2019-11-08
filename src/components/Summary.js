import React, { Component } from 'react';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

class Summary extends Component {
    state = {
        finaldata: [],
        isLoading: true
    }

    constructor(props) {
        super(props);

    }

    identifyBirth = () => {
        var lahir = this.state.finaldata[0].nik


        var hariLahir = lahir.toString().slice(6, 8)
        var bulanLahir = parseInt(lahir.toString().slice(8, 10))
        var tahunLahir = lahir.toString().slice(10, 12)

        var tLahir = (hariLahir + ' ' + monthNames[bulanLahir - 1] + ' ' + 19 + tahunLahir).toString()

        return tLahir
    }

    identifyGender = () => {
        var lahir = this.state.finaldata[0].nik
        var gender = lahir.toString().slice(6, 7)

        if (gender === 0 || 1) {
            return ('laki-laki')
        }

        else {
            return ('perempuan')
        }


    }

    async componentDidMount() {
        var data = await JSON.parse(localStorage.getItem('finaldata'))
        console.log(this.state.finaldata)
        console.log(data)

        var finaldata = []
        finaldata.push(data)
        this.setState({ finaldata, isLoading: false })
        console.log(this.state.finaldata)

    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <div></div>
            )
        }
        if (this.state.isLoading === false) {
            return (
                <div className='container'>
                    <div className='card'>
                        <div className='card-header'>
                            Rangkuman Peminjam
                       </div>
                        <div className='card-body'>
                            <h1>nama lengkap : {this.state.finaldata[0].name}</h1>
                            <h3>no hp : {this.state.finaldata[0].phone}</h3>
                            <h3>email : {this.state.finaldata[0].email}</h3>
                            <h2>jumlah pinjaman : Rp {this.state.finaldata[0].pinjaman}.000.000,-</h2>
                            <h2>periode pinjaman : {this.state.finaldata[0].periode} bulan</h2>
                            <h3>jumlah angsuran : Rp {this.state.finaldata[0].angsuran} ,-</h3>
                            <h4 className='float-right'> tanggal lahir : {this.identifyBirth()}</h4>
                            <h4 className='float-right'> gender : {this.identifyGender()} </h4>
                        </div>

                    </div>

                </div>
            )
        }
    }
}

export default Summary;