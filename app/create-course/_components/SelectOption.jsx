import React, { useContext } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../../components/ui/select"
import { Input } from '../../../components/ui/input';
import { UserInputContext } from '../../_context/UserInputContext';


function SelectOption() {

    const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

    const handleInputChange = (fieldName, value) => {
        setUserCourseInput(prev => ({
            ...prev,
            [fieldName]: value
        }))

    }

    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm'>🎓Difficulty Level</label>
                    <Select onValueChange={(value) => handleInputChange('level', value)}
                        defaultValue={userCourseInput?.level}>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>⏱️Course Duration</label>
                    <Select onValueChange={(value) => handleInputChange('duration', value)}
                        defaultValue={userCourseInput?.duration}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="1">1 Hour</SelectItem>
                            <SelectItem value="2">2 hours</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>🎞️Include Video</label>
                    <Select onValueChange={(value) => handleInputChange('displayVideo', value)}
                        defaultValue={userCourseInput?.displayVideo}
                    >
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>📖No. of Chapters</label>
                    <Input
                        type="number"
                        defaultValue={userCourseInput?.noOfChapter}
                        onChange={(event) => {
                            const value = parseInt(event.target.value, 10);
                            if (value <= 8) {
                                handleInputChange('noOfChapter', value);
                            } else {
                                handleInputChange('noOfChapter', 8); // Cap the value to 8 if it's higher
                            }
                        }}
                        min={1} // Optional: set a minimum value of 1
                        max={8} // Optional: set the max attribute to 8
                    />
                </div>


            </div>
        </div>
    );
}

export default SelectOption;
