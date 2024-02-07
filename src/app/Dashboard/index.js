import Content from '@/app/Dashboard/components';
import Core from '@/app/Dashboard/core';

const Page = (props) => (
    <Core
        Content={Content}
        {...props}
    />
);

export default Page;