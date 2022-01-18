class User < ApplicationRecord

    has_secure_password
#    after_create :email_user

    EMAIL_REGEX = /\A[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\z/i.freeze
end
