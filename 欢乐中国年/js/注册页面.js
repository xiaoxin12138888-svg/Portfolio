
        function $(id){return document.getElementById(id);}
        function checkReg(){			
				var username=$("username").value;
				var pwd=$("password1").value;
				var pwdConfirm=$("password2").value;
				var checkright=true;
                var check=$("checkbox").checked;			
				if(username=="" || pwd==""||pwdConfirm==""||email=="")
				{
					alert("请确认是否有未填信息！！");
					checkright=false;
				}
				else    //不为空，再判断
				{ 
					if(pwd.length<6)
					{
						alert("密码长度太短，至少6个字符！！");
						checkright=false;
					}else if(pwd.length>16){
                        alert("密码长度太长，最多16个字符！！");
                        checkright=false;
                    }
                    else if(pwd!=pwdConfirm)
					{
						alert("两次输入的密码必须一致！！");
						checkright=false;
					}else if(check==""||check==false){
                        alert("请认真看用户协议并勾选");
                        checkright=false;
                    }
                    	else
						{	checkright=true;}
				}
				return checkright;
			} 