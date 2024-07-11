import React from 'react';


export default function ProfileContent() {

    return (
        <div>
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                <div className="tab-header">
                    <h5>Profile details</h5>
                </div>
                <div className="tab-item-content">
                    <div className="">
                        <div className="profi-de">
                            <section className="detail">
                                <form class="contact-form row" method="post" action="/update-profile">
                                    <div class="form-field col-lg-6">
                                        <input id="name" class="input-text js-input" placeholder="" type="text" required />
                                        <label class="label" for="name">Name</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="mobile" class="input-text js-input" placeholder="" type="tel" pattern="[0-9]{10}" required />
                                        <label class="label" for="mobile">Mobile number</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="email" class="input-text js-input" placeholder="" type="email" required />
                                        <label class="label" for="email">E-mail</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="state" class="input-text js-input" placeholder="" type="text" required />
                                        <label class="label" for="state">State</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="city" class="input-text js-input" placeholder="" type="text" required />
                                        <label class="label" for="city">City</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="old-password" class="input-text js-input" placeholder="" type="password" required />
                                        <label class="label" for="old-password">Old Password</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="new-password" class="input-text js-input" placeholder="" type="password" required />
                                        <label class="label" for="new-password">New Password</label>
                                    </div>
                                    <div class="form-field col-lg-6">
                                        <input id="confirmnew-password" class="input-text js-input" placeholder="" type="password" required />
                                        <label class="label" for="confirmnew-password">Confirm New Password</label>
                                    </div>
                                    <div class="form-field col-lg-12">
                                        <input class="submit-btn" type="submit" value="update profile" />
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}