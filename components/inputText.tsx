import { useController, Control } from 'react-hook-form';
import { JoinFormField, LoginFormField, ProfileFormField } from 'types/auth';

export const InputEmail = ({
  control,
}: {
  control: Control<LoginFormField>;
}) => {
  const { field } = useController({
    control,
    name: 'email',
  });

  return (
    <input
      type="text"
      onChange={field.onChange}
      className="animate-intro block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="Email을 입력해 주세요"
    />
  );
};

export const InputPwd = ({ control }: { control: Control<LoginFormField> }) => {
  const { field } = useController({
    control,
    name: 'password',
  });

  return (
    <input
      type="password"
      onChange={field.onChange}
      className="animate-intro block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="PassWord를 입력해 주세요"
    />
  );
};

export const InputEmailJoin = ({
  control,
}: {
  control: Control<JoinFormField>;
}) => {
  const { field } = useController({
    control,
    name: 'email',
    rules: {
      validate: {
        matchPattern: (value) =>
          /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value),
        checkLength: (value) => value.length >= 10 && value.length <= 40,
      },
    },
  });

  return (
    <input
      type="text"
      onChange={field.onChange}
      className="animate-intro block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="Email을 입력해 주세요"
    />
  );
};

export const InputPwdJoin = ({
  control,
}: {
  control: Control<JoinFormField>;
}) => {
  const { field } = useController({
    control,
    name: 'password',
    rules: {
      required: 'Password를 입력해 주세요',
      validate: {
        matchPattern: (value) =>
          /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$@$!%*?&]).{3,}$/.test(value),
        checkLength: (value) => value.length >= 8 && value.length <= 16,
      },
    },
  });

  return (
    <input
      type="password"
      onChange={field.onChange}
      className="animate-intro block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="Password를 입력해 주세요"
    />
  );
};

export const InputPwdCheckJoin = ({
  control,
}: {
  control: Control<JoinFormField>;
}) => {
  const { field } = useController({
    control,
    name: 'pwdCheck',
    rules: {
      required: 'Password를 다시 한 번 입력해 주세요',
    },
  });

  return (
    <input
      type="password"
      onChange={field.onChange}
      className="animate-intro block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="Password를 다시 한 번 입력해 주세요"
    />
  );
};

export const InputImgFile = ({
  control,
}: {
  control: Control<ProfileFormField>;
}) => {
  const { field } = useController({
    control,
    name: 'imageFile',
  });

  return (
    <input
      type="file"
      accept="image/gif, image/jpeg, image/png"
      className="w-[30rem]"
      onChange={(event) => field.onChange(event.target.files)}
      //일부러 onChange 속성을 이용해 field value를 바꿔준다.
      //default는 string 값이 field value에 들어가기 때문.
    />
  );
};

export const InputNickName = ({
  control,
  defaultValue,
}: {
  control: Control<ProfileFormField>;
  defaultValue: string;
}) => {
  const { field } = useController({
    control,
    name: 'nickName',
    rules: {
      validate: {
        checkLength: (value) => value.length >= 2 && value.length <= 10,
      },
    },
  });

  return (
    <input
      type="text"
      onChange={field.onChange}
      defaultValue={defaultValue}
      className="block bg-transparent w-[30rem] h-12 mt-8 border-solid border-b-[1px] border-b-white focus:outline-none focus:border-sky-500 text-white text-2xl"
      placeholder="Nickname을 입력해 주세요"
    />
  );
};
