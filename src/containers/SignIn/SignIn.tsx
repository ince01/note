import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Input, Typography, notification } from 'antd';
import { useTokenCreateMutation } from 'generated/graphql';

interface ISignInForm {
  userName: string;
  password: string;
}

function SignIn() {
  const intl = useIntl();

  const history = useHistory();

  const { control, errors, handleSubmit } = useForm<ISignInForm>({
    mode: 'onBlur',
    defaultValues: { userName: '', password: '' },
  });

  const [tokenCreateMutation, { loading }] = useTokenCreateMutation();

  const submitHandler = async (data: ISignInForm) => {
    try {
      const result = await tokenCreateMutation({ variables: data });

      history.push('/');

      localStorage.setItem(
        'bearerToken',
        result.data?.tokenCreate.accessToken ?? '',
      );
    } catch (error) {
      notification.error({ message: error.message });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col w-96 max-w-full bg-white rounded-lg p-5 shadow-lg">
        <Typography.Title
          className="flex justify-center items-center text-center"
          level={2}
        >
          Hello !
        </Typography.Title>
        <Typography.Text className="flex justify-center items-center text-center mb-3">
          Need an account?&nbsp;
          <a href="https://my.supernotes.app/">
            <FormattedMessage defaultMessage="Register" />
          </a>
        </Typography.Text>
        <form
          className="ant-form ant-form-vertical"
          id="sign-in-form"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Form.Item
            label={intl.formatMessage({ defaultMessage: 'Email' })}
            validateStatus={errors?.userName ? 'error' : 'success'}
            help={errors?.userName?.message}
          >
            <Controller
              as={
                <Input
                  data-testid="email"
                  size="large"
                  placeholder={intl.formatMessage({ defaultMessage: 'Email' })}
                  autoComplete="true"
                />
              }
              name="userName"
              control={control}
            />
          </Form.Item>
          <Form.Item
            label={intl.formatMessage({ defaultMessage: 'Password' })}
            validateStatus={errors?.password ? 'error' : 'success'}
            help={errors?.password?.message}
          >
            <Controller
              as={
                <Input.Password
                  data-testid="password"
                  size="large"
                  type="password"
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Password',
                  })}
                  autoComplete="false"
                />
              }
              name="password"
              control={control}
            />
          </Form.Item>
          <div className="mb-6 -mt-3">
            <Link to="/forgotpassword" className="forgotPass">
              <FormattedMessage defaultMessage="Forgot password ?" />
            </Link>
          </div>
          <Button
            loading={loading}
            data-testid="signin-button"
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            <FormattedMessage defaultMessage="Sign in" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
