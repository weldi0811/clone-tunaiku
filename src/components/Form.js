import React, { Component, Fragment } from 'react';
import { Formik, Field } from 'formik'
import Summary from './Summary'
import * as yup from 'yup'
import { Link } from 'react-router-dom'


const userSchema = yup.object().shape({
    name: yup.string().required().min(4).max(255),
    phone: yup.string().required().min(11).max(13),
    email: yup.string().email().required(),
    emailOwned: yup.string().required('silahkan pilih salah satu').ensure(),
    tahuTunaiku: yup.string().required('silahkan pilih salah satu'),
    tujuanPinjaman: yup.string().required('silahkan pilih salah satu'),
})
class Form extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ...props.stateData
        }
        console.log(this.state)
    }

    componentDidMount() {
        console.log(this.props.stateData)
        // this.setState({ state: this.props })
        console.log(this.state)
    }

    goToSummary = () => {
        console.log(this.state)
        return (
            <div>
                <Summary finalData={this.state} />
            </div>
        )
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <Fragment>
                    <Formik
                        initialValues={this.state}

                        onSubmit={(values, actions) => {
                            actions.setSubmitting(true)
                            setTimeout(() => {
                                actions.setSubmitting(false)
                                this.setState({
                                    ...this.state,
                                    name: values.name,
                                    phone: `+62 ${values.phone}`,
                                    email: values.email,
                                    emailOwned: values.emailOwned,
                                    tujuanPinjaman: values.tujuanPinjaman,
                                    tahuTunaiku: values.tahuTunaiku,
                                    openSummary: true
                                })

                                console.log('ini setelah submit')
                                console.log(this.state)
                                localStorage.setItem('finaldata', JSON.stringify(this.state))
                                alert(JSON.stringify(values, null, 2))

                            }, 20)
                        }}
                        validationSchema={userSchema}>

                        {props =>
                            !props.isSubmitting ? (
                                <form onSubmit={props.handleSubmit} className='form'>
                                    <Field
                                        type='text'
                                        placeholder='masukan nama lengkap'
                                        onChange={props.handleChange}
                                        name='name'
                                        value={props.values.name}
                                        className='form-message valid' />
                                    {props.errors.name && props.touched.name ? (
                                        <span className='form-message invalid'>{props.errors.name}</span>
                                    ) : (
                                            ''
                                        )}

                                    <Field
                                        type='number'
                                        placeholder='masukan nomor hand phone'
                                        onChange={props.handleChange}
                                        name='phone'
                                        value={props.values.phone}
                                        className='form-message valid' />
                                    {props.errors.phone && props.touched.phone ? (
                                        <span className='form-message invalid'>{props.errors.phone}</span>
                                    ) : (
                                            ''
                                        )}



                                    <Field
                                        type='email'
                                        placeholder='masukkan email'
                                        onChange={props.handleChange}
                                        name='email'
                                        value={props.values.email}
                                        className='form-message valid' />
                                    {props.errors.email && props.touched.email ? (
                                        <span className='form-message invalid'>{props.errors.email}</span>
                                    ) : (
                                            ''
                                        )}

                                    <div className='form-group'>
                                        <label htmlFor='emailOwned'>Kepemilikan Email</label>
                                        <Field name='emailOwned' component='select' placeholder='Kepemilikan email'
                                            onChange={props.handleChange}
                                            value={props.values.emailOwned}>
                                            <option value="false">pilih salah satu</option>
                                            <option value="pribadi">pribadi</option>
                                            <option value="kantor">kantor</option>
                                            <option value="lainnya">lainnya</option>
                                        </Field>


                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='emailOwned'>Tujuan Pinjaman</label>
                                        <Field name='tujuanPinjaman' component='select' placeholder='Tujuan Pinjaman'
                                            onChange={props.handleChange}
                                            value={props.values.tujuanPinjaman}>
                                            <option value="false">pilih salah satu</option>
                                            <option value="liburan">liburan</option>
                                            <option value="investasi">investasi</option>
                                            <option value="sekolah">sekolah</option>
                                        </Field>
                                    </div>
                                    <div className='form-group'>
                                        <label htmlFor='emailOwned'>Darimana mengetahui Tunaiku</label>
                                        <Field name='tahuTunaiku' component='select' placeholder='Darimana mengetahui Tunaiku'
                                            onChange={props.handleChange}
                                            value={props.values.tahuTunaiku}>
                                            <option value='false'>pilih salah satu</option>
                                            <option value="internet">internet</option>
                                            <option value="teman">teman</option>
                                            <option value="radio">radio</option>
                                        </Field>

                                    </div>


                                    {this.state.openSummary === false ? (
                                        <button
                                            type="submit"
                                            disabled={!props.dirty && props.isSubmitting}>
                                            Submit
                                    </button>
                                    ) : (

                                            <Link to='/summary' >
                                                <button
                                                type="button"
                                                disabled={!props.dirty && props.isSubmitting}
                                                onClick={() => { return (<Summary finalData={this.state} />) }}>
                                                buka summary
                                            </button>
                                            </Link>

                                        )}

                                </form>
                            ) : (
                                    <div className='overlay'></div>
                                )}
                    </Formik>
                </Fragment>
            </div>
        );
    }
}

export default Form;