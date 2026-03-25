import openpyxl

wb = openpyxl.load_workbook(r"c:\Projects\STS_quiz\STS 4006 MCQ's.xlsx")

for sn in wb.sheetnames:
    ws = wb[sn]
    print(f"=== {sn} ===")
    hdrs = [str(c.value).strip() for c in ws[1] if c.value]
    print(f"Headers: {hdrs}")
    
    count = 0
    topics = set()
    for r in ws.iter_rows(min_row=2, max_row=ws.max_row):
        vals = [c.value for c in r[:len(hdrs)]]
        if vals[2]:
            count += 1
            if vals[0]:
                topics.add(str(vals[0]).strip())
    print(f"Total questions: {count}")
    ts = sorted(topics)
    for i, t in enumerate(ts):
        print(f"  Topic {i+1}: {t}")
    print()
