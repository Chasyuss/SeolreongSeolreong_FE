import Logo from '../assets/icons/Logo.svg?react';
import Bell from '../assets/icons/Bell.svg?react';
const Header = () => {
  return (
    <div className='mt-[50px] pl-[13px] pr-[16px] py-4 flex flex-row items-center justify-between'>
      <Logo className='w-[70px] h-[21px] cursor-pointer' />
      <Bell className='cursor-pointer'/>
    </div>

  )
}

export default Header