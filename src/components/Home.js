import React, { Component } from 'react';
import { Slider } from '@material-ui/core'
import Form from './Form'

const marksPinjaman = [
    {value: 2, label: 2},
    {value: 20, label: 20}
]

const marksPeriode = [
    { value: 6, label: 6 },
    { value: 20, label: 20 }
]

class Home extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        emailOwned: '',
        tujuanPinjaman: '',
        tahuTunaiku: '',
        sliderPage: true,
        pinjaman: 2,
        periode: 6,
        angsuran: '410.000',
        openSummary : false
    }


    commitPinjaman = (event, value) => {
        this.setState({pinjaman : value})
        this.hitungBunga()
    }

    commitPeriode = (event, value) => {
        this.setState({periode:value})
        this.hitungBunga()
    }

    renderPinjamanSlider = () => {
        return (
            <div>
                <h4>Jumlah Pinjaman : Rp {this.state.pinjaman} juta</h4>
                <Slider
                    step={1}
                    min={2}
                    max={20}
                    marks={marksPinjaman}
                    valueLabelDisplay='auto'
                    onChange={this.commitPinjaman} />
            </div>
        )
    }
    renderPeriodeSlider = () => {
        return (
            <div>
                <h4>Periode Pinjaman : {this.state.periode} Bulan</h4>
                <Slider
                    step={1}
                    min={6}
                    max={20}
                    marks={marksPeriode}
                    valueLabelDisplay='auto'
                    onChange={this.commitPeriode} />
            </div>
        )
    }

    hitungBunga = () => {
        const periode = this.state.periode
        const jumlah = this.state.pinjaman * 1000000
        const bayarBulan = jumlah/periode

        var bayarBunga = (jumlah * 0.23 / periode)

        var angsuran = (bayarBulan + bayarBunga).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

        this.setState({angsuran : angsuran})

        return angsuran
    }

    ajukanPinjaman = () => {
        this.setState({sliderPage : false})
    }
    render() {
        if (this.state.sliderPage === false) {
            return (
                <div>
                    <div>
                        <div className='row container'>
                            <div className='col ml-5'>
                                <h2>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h2>
                                <h4>Pinjaman Online Tanpa Jaminan
                            Rp2 - 20 Juta Syarat KTP Saja!</h4>
                            </div>
                            <div className='col mr-5'>
                                <Form stateData={this.state}/>

                            </div>
                        </div>
                    </div>
                </div>
            )

        }
        if (this.state.sliderPage === true) {
            return (
                <div>
                    <div>
                        <div className='row container'>
                            <div className='col ml-5'>
                                <h2>Ajukan Pinjaman Tanpa Agunan di Tunaiku</h2>
                                <h4>Pinjaman Online Tanpa Jaminan
                        Rp2 - 20 Juta Syarat KTP Saja!</h4>
                            </div>
                            <div className='col mr-5'>
                                <div className='col-sm-3 col-xs-4'>
                                    <p className='flex'>Cicilan </p>
                                </div>
                                <div className='col-sm-9 col-xs-8'>
                                    <p className='flex'>
                                        <span> Rp {this.state.angsuran}</span>
                                        <br />
                                        <span>per bulan</span>
                                    </p>
                                </div>
                                {this.renderPinjamanSlider()}
                                {this.renderPeriodeSlider()}
                                <button className='btn btn-primary button' onClick={() => { this.ajukanPinjaman() }}>ajukan pinjaman</button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }
}

export default Home;