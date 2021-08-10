import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { NoStackConsumer, LogoutButton } from '@nostack/no-stack';
import RegistrationForm from '../RegistrationForm';
import LoginForm from '../LoginForm';
import { PLATFORM_ID, TYPE_CUSTOMER_ID } from '../../config';
import { Context as AuthContext } from '../../context/AuthContext';

class NavBar extends Component {
  static contextType = AuthContext;

  state = {
    modalRegistration: false,
    modalLogin: false,
    checkbox: false,
  };

  howItWorks = () => {
    const elmnt = document.getElementById('how-it-works');
    setTimeout(() => {
      elmnt.scrollIntoView();
    }, 100);
    return <Redirect to='/' push />;
  };

  about = () => {
    const elmnt = document.getElementById('about');
    setTimeout(() => {
      elmnt.scrollIntoView();
    }, 100);
    return <Redirect to='/' push />;
  };

  // Events
  modalHandlerRegistration = () => {
    this.setState({
      modalRegistration: !this.state.modalRegistration,
    });
  };

  modalHandlerLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };

  modalHandlerSwitchForm = () => {
    this.modalHandlerRegistration();
    this.modalHandlerLogin();
  };

  checkboxHandler = () => {
    this.setState({
      checkbox: !this.state.checkbox,
    });
  };

  handleClick = () => {
    const { logoutUser } = this.context;
    logoutUser();
  };

  render() {
    return (
      <header className='container header flex items-center'>
        <div className='header__logo'>
          <a href='/'>
            <img
              src='https://pivotatestaticassets.com/images/Pivotate Logo.svg'
              alt='Pivotate Logo'
              width='170'
            />
          </a>
        </div>
        {this.state.modalRegistration && (
          <RegistrationForm
            platformId={PLATFORM_ID}
            userClassId={TYPE_CUSTOMER_ID}
            onSwitch={this.modalHandlerSwitchForm}
            onClose={this.modalHandlerRegistration}
            // ns__custom_start unit: general, comp: LoginForm, loc: addedRegistrationFormProps
            open={this.state.modalRegistration}
            // ns__custom_start unit: general, comp: LoginForm, loc: addedRegistrationFormProps
          />
        )}
        {this.state.modalLogin && (
          <LoginForm
            onSwitch={this.modalHandlerSwitchForm}
            onClose={this.modalHandlerLogin}
            // ns__custom_start unit: general, comp: LoginForm, loc: addedLoginFormProps
            open={this.state.modalLogin}
            // ns__custom_start unit: general, comp: LoginForm, loc: addedLoginFormProps
          />
        )}
        <nav className='hide-tablet'>
          <ul className='flex header__nav'>
            <li>
              <Link to='/pricing?=initial'> &nbsp; PRICING </Link>
            </li>
            <li>
              <Link to='/#how-it-works'> HOW IT WORKS </Link>
            </li>
            <li>
              <Link to='/#about-us'> ABOUT US </Link>
            </li>
            <li>
              <Link to='/contact'> CONTACT </Link>
            </li>
          </ul>
        </nav>
        {console.log(`modalRegistration`, this.state.modalRegistration)}
        {!this.props.noAction && (
          <div className='grow-12 text-right hide-tablet'>
            <NoStackConsumer>
              {({ loading, currentUser }) => {
                console.log({ loading, currentUser });
                if (loading) return null;
                if (!currentUser) {
                  return (
                    <>
                      <span
                        role='presentation'
                        onClick={this.modalHandlerLogin}
                      >
                        LOGIN
                      </span>
                      <span
                        role='presentation'
                        onClick={this.modalHandlerRegistration}
                        className='button button--yellow button__sign-up'
                      >
                        SIGN UP
                      </span>
                    </>
                  );
                }
                return (
                  <div className='logout'>
                    <Link to='/'>
                      <LogoutButton />
                    </Link>
                    <Redirect to='/staging' />
                  </div>
                );
              }}
            </NoStackConsumer>
          </div>
        )}
        <div className='show-tablet'>
          <div
            role='presentation'
            id='amp-burger'
            onClick={this.checkboxHandler}
          >
            <div className='lines'>
              <input
                type='checkbox'
                // checked={this.state.checkbox}
                id='checkbox'
                className='checkbox'
              />
              <div className='lines-icon' data-menu=''>
                <div className='icon-left' />
                <div className='icon-right' />
              </div>
              <div className='mobile-menu__wrapper'>
                <ul>
                  <li>
                    <Link to='/pricing?inital'>PRICING</Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to='/#how-it-works'>
                      HOW IT WORKS{' '}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to='/#about-us'>
                      ABOUT US{' '}
                    </Link>
                  </li>
                  <li>
                    <Link onClick={this.checkboxHandler} to='/contact'>
                      CONTACT
                    </Link>
                  </li>
                  {!this.props.noAction && (
                    <li>
                      <span
                        role='presentation'
                        onClick={this.modalHandlerLogin}
                      >
                        LOGIN
                      </span>
                    </li>
                  )}
                  {!this.props.noAction && (
                    <li>
                      <span
                        role='presentation'
                        onClick={this.modalHandlerRegistration}
                        className='button button--yellow button__sign-up'
                      >
                        FREE CONSULTATION
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
