dllname = "iexplore"
f = open("lst.txt")
out = open("%s.css" % (dllname), "w")
line = f.readline()

while line:
    # 檔案名稱
    filename = line.split(".")[0]
    out.write(".%s-%s {\n" % (dllname, filename))
    out.write("background-image: url('./%s.ico');\n" % (filename))
    out.write("}\n\n")
    line = f.readline()
    
f.close()
out.close()
