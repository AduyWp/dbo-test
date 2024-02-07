import Content from '@/app/Login/components';
import Core from '@/app/Login/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;